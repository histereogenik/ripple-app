import * as S from "./styles";
import { FaHome, FaCompass, FaBell, FaEnvelope, FaBookmark, FaUser } from "react-icons/fa";

const NavigationMenu = () => {
    return (
        <S.NavContainer>
            <S.NavItem>
                <FaHome />
                <span>Home</span>
            </S.NavItem>
            <S.NavItem>
                <FaCompass />
                <span>Explore</span>
            </S.NavItem>
            <S.NavItem>
                <FaBell />
                <span>Notifications</span>
            </S.NavItem>
            <S.NavItem>
                <FaEnvelope />
                <span>Messages</span>
            </S.NavItem>
            <S.NavItem>
                <FaBookmark />
                <span>Bookmarks</span>
            </S.NavItem>
            <S.NavItem>
                <FaUser />
                <span>Profile</span>
            </S.NavItem>
        </S.NavContainer>
    );
};

export default NavigationMenu;