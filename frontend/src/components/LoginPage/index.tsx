import Login from "../Login";
import logoImg from "../../assets/ripplelogonbg.png"
import * as S from "./styles";

const LoginPage = () => {
    return (
        <S.PageContainer>
            <S.LeftSection>
                <Login />
            </S.LeftSection>

            <S.RightSection>
                <S.Logo src={logoImg} alt="Rippleet Logo" />
                <S.Slogan>Connect, share, and explore the ripple of thoughts.</S.Slogan>
            </S.RightSection>
        </S.PageContainer>
    );
};

export default LoginPage;
