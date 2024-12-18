import styled from "styled-components"
import { colors, breakpoints } from "../../styles"

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${colors.black};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  order: 1;

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
    padding: 40px;
  }
`

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightgray};
  color: ${colors.black};
  order: 2;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
    padding: 40px;
    text-align: center;
  }
`

export const Logo = styled.img`
  max-width: 400px;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 250px;
  }
`

export const Slogan = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${colors.darkorange};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`
