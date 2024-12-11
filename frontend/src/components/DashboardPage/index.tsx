import Header from "../Header";
import NavigationMenu from "../Dashboard/NavigationMenu";

import * as S from "./styles";
import Rippleets from "../Dashboard/Rippleets";

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
                </S.RightColumn>
            </S.PageContainer>
        </>
    );
};

export default DashboardPage;