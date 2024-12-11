import styled from "styled-components";
import { colors, breakpoints } from "../../../styles";

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-around;
        gap: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${colors.black};
        padding: 0.5rem 0;
        position: fixed;
        z-index: 1000;
        border-top: 1px solid ${colors.gray};
    }
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    color: ${colors.white};
    font-size: 1rem;

    &:hover {
        background-color: ${colors.darkgray};
        color: ${colors.orange};
    }

    span {
        font-size: 1rem;
        font-weight: 500;

        @media (max-width: ${breakpoints.tablet}) {
            display: none;
        }
    }

    svg {
        font-size: 1.2rem;

        @media (max-width: ${breakpoints.tablet}) {
            font-size: 1.5rem;
        }
    }
`;