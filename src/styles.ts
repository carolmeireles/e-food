import { createGlobalStyle } from "styled-components";

export const colors = {
  salmon: "#E66767",
  beige: "#FFEBD9",
  lightBeige: "#FFF8F2",
  white: "#fff",
};

export const breakpoints = {
  tablet: "768px",
};

export const CssGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${colors.lightBeige};
        color: ${colors.salmon};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;
