import { createGlobalStyle } from 'styled-components';

export const colors = {
    black: '#000000',
    orange: '#ff7300',
    darkorange: '#e86600',
    darkgray: '#222222',
    lightgray: '#444444',
    gray: '#333333',
    white: '#ffffff',
};

export const breakpoints = {
    desktop: '1024px',
    tablet: '767px',
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${colors.darkgray};
        color: ${colors.orange};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}) {
            max-width: 80%;
        }
    }
`;

