import styled from "styled-components";
import { colors, breakpoints } from "../styles";

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: ${colors.darkgray};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 1rem;
    }
`;
