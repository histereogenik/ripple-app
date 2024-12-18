import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { logout } from "../../store/reducers/authSlice"
import { apiSlice, useGetUserProfileQuery } from "../../services/apiSlice"

import * as S from "./styles"
import { FaCog, FaSignOutAlt } from "react-icons/fa"
import logoImg from "../../assets/ripple-orange-nobg.png"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: userProfile, isLoading, error } = useGetUserProfileQuery()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(apiSlice.util.resetApiState())
    navigate("/login")
  }

  if (isLoading) {
    return <S.HeaderContainer>Loading...</S.HeaderContainer>
  }

  if (error) {
    return <S.HeaderContainer>Error loading profile</S.HeaderContainer>
  }

  return (
    <S.HeaderContainer>
      <S.Logo
        src={logoImg}
        alt="Ripple Logo"
        onClick={() => navigate("/newsfeed")}
      />
      <S.UserContainer>
        <S.UserInfo>
          <S.ProfilePicture
            src={userProfile?.profile_picture}
            alt={`${userProfile?.user}'s profile`}
          />
          <S.UserName>{userProfile?.user.username}</S.UserName>
        </S.UserInfo>
        <S.DropdownMenu>
          <S.MenuItem>
            <FaCog /> Edit Profile
          </S.MenuItem>
          <S.MenuItem onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </S.MenuItem>
        </S.DropdownMenu>
      </S.UserContainer>
    </S.HeaderContainer>
  )
}

export default Header
