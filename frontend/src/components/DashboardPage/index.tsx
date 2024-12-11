import Header from "../Header";
import NavigationMenu from "../Dashboard/NavigationMenu";

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
                </S.MiddleColumn>
                <S.RightColumn>
                </S.RightColumn>
            </S.PageContainer>
        </>
    );
};

export default DashboardPage;