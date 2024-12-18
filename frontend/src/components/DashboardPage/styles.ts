import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const PageContainer = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  min-height: 100vh;
  color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 0 1rem 0 1rem;
  }
`

export const LeftColumn = styled.div`
  flex: 1;
  padding: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    flex: 0;
  }
`

export const MiddleColumn = styled.div`
  flex: 2;
  overflow-y: auto;
  border-left: 1px solid ${colors.translucentGray};
  border-right: 1px solid ${colors.translucentGray};

  @media (max-width: ${breakpoints.tablet}) {
    border: none;
  }
`

export const RightColumn = styled.div`
  flex: 1;
  padding: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
