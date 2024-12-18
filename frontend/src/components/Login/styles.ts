import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.black};
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 0;
    padding: 0 10px;
  }
`

export const LoginTitle = styled.h1`
  color: ${colors.orange};
  margin-bottom: 1rem;
  text-align: center;
  font-size: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`

export const RegisterLink = styled.span`
  margin-top: 1rem;
  color: ${colors.orange};
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  color: ${colors.error};
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`
