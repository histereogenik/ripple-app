import Header from "../Header"
import NavigationMenu from "../Dashboard/NavigationMenu"
import Rippleets from "../Dashboard/Rippleets"

import * as S from "./styles"
import RightColumn from "../Dashboard/RightColumn"

const DashboardPage = () => {
  return (
    <>
      <Header />
      <S.PageContainer>
        <S.LeftColumn>
          <NavigationMenu />
        </S.LeftColumn>
        <S.MiddleColumn>
          <Rippleets />
        </S.MiddleColumn>
        <S.RightColumn>
          <RightColumn />
        </S.RightColumn>
      </S.PageContainer>
    </>
  )
}

export default DashboardPage
