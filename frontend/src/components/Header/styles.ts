import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${colors.black};
    color: ${colors.white};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        align-items: stretch;
        padding: 1rem;
    }
`;

export const Logo = styled.img`
    max-height: 38px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 1rem;
    }
`;

export const UserContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover > div {
        visibility: visible;
        opacity: 1;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${colors.orange};
`;

export const UserName = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.white};
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${colors.darkgray};
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out;
    z-index: 100;

    a {
        display: flex;
        align-items: center;
        padding: 0.8rem;
        color: ${colors.white};
        text-decoration: none;

        &:hover {
        background-color: ${colors.gray};
        }

        svg {
        margin-right: 0.5rem;
        }
    }
`

export const MenuItem = styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: ${colors.white};
    cursor: pointer;

    &:hover {
        background-color: ${colors.lightgray};
    }

    svg {
        font-size: 1rem;
    }
`;
