import styled from "styled-components";
import { colors, breakpoints } from "../styles";

export const InputField = styled.input`
    margin-bottom: 1rem;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid ${colors.lightgray};
    border-radius: 4px;
    background: ${colors.gray};
    color: ${colors.white};
    width: 100%;

    &:focus {
        border-color: ${colors.orange};
        outline: none;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 8px;
        font-size: 14px;
    }
`;