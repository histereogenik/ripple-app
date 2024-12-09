import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background: linear-gradient(to bottom, ${colors.black}, ${colors.lightgray});
`;

export const Title = styled.h1`
    color: ${colors.orange};
    margin-bottom: 1rem;
    text-align: center;
    font-size: 24px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 20px;
    }
`;

export const ErrorMessage = styled.p`
    color: ${colors.error};
    font-size: 0.9rem;
    margin: -0.5rem 0 1rem;
    text-align: center;
`;

export const Logo = styled.img`
    display: block;
    margin: 0 auto 1rem auto;
    max-width: 200px;
    color: ${colors.orange};

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 150px;
    }
`;

export const LoginLink = styled.span`
    margin-top: 1rem;
    color: ${colors.orange};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const SuccessMessage = styled.h2`
    font-size: 1.5rem;
    color: ${colors.orange};
    text-align: center;
    margin-top: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`;