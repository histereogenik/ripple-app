import Header from "../Header";
import NavigationMenu from "../Dashboard/NavigationMenu";
import Rippleets from "../Dashboard/Rippleets";

import * as S from "./styles";

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