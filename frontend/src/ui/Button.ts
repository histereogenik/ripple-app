import styled from "styled-components";
import { colors, breakpoints } from "../styles";

export const Button = styled.button`
    padding: 0.8rem;
    font-size: 1rem;
    background: ${colors.orange};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;

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
