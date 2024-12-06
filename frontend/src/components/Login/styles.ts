import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${colors.black};
    padding: 0 20px;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0 10px;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    background: ${colors.darkgray};
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const LoginTitle = styled.h1`
    color: ${colors.orange};
    margin-bottom: 1rem;
    text-align: center;
    font-size: 24px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 20px;
    }
`;

export const InputField = styled.input`
    margin-bottom: 1rem;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid ${colors.lightgray};
    border-radius: 4px;
    background: ${colors.gray};
    color: ${colors.white};
    
    &:focus {
        border-color: ${colors.orange};
        outline: none;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 8px;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    padding: 0.8rem;
    font-size: 1rem;
    background: ${colors.orange};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: ${colors.darkorange};
    }

    &:disabled {
        background: ${colors.lightgray};
        cursor: not-allowed;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 8px;
        font-size: 14px;
    }
`;

export const RegisterLink = styled.span`
    margin-top: 1rem;
    color: ${colors.orange};
    text-align: center;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 12px;
    }
`;