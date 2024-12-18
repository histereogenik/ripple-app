import styled from "styled-components"
import { colors, breakpoints } from "../../../styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const SearchField = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  background-color: ${colors.darkgray};
  color: ${colors.white};
  font-size: 1rem;

  &::placeholder {
    color: ${colors.lightgray};
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SectionTitle = styled.h2`
  color: ${colors.white};
  font-size: 1.2rem;
`

export const Topic = styled.div`
  color: ${colors.lightgray};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: ${colors.orange};
  }
`

export const UserSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.span`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: bold;
`

export const UserHandle = styled.span`
  color: ${colors.lightgray};
  font-size: 0.9rem;
`

export const FollowButton = styled.button`
  background-color: ${colors.black};
  margin-left: 2rem;
  color: ${colors.orange};
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.orange};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkorange};
    color: ${colors.white};
  }
`
