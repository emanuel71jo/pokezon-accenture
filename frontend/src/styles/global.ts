import { mixins } from "./mixins";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import "~bootstrap/scss/bootstrap";

  @font-face {
    font-family: 'Roboto-Bold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Bold'), url('https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu7mxKOzY.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Nunito-SemiBold';
    font-style: normal;
    font-weight: 600;
    src: local('Nunito-SemiBold'), url('http://fonts.gstatic.com/s/nunito/v7/TttUCfJ272GBgSKaOaD7KpBw1xU1rKptJj_0jans920.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
  }
  
  @font-face {
    font-family: 'Nunito-Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito-Regular'), url('http://fonts.gstatic.com/s/nunito/v7/6TbRXKWJjpj6V2v_WyRbMevvDin1pK8aKteLpeZ5c0A.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    .MuiDrawer-paperAnchorDockedLeft {
    border-right: none !important;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 5px;
    }
    &::-webkit-scrollbar {
        width: 16px;
        border-radius: 5px;
        background: #fff;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${mixins.colors.primary};
        border:4px solid #fff;
    }
  }

  body {
    background: ${mixins.colors.background};
    --webkit-font-smoothing: antialiased;
  }

  #root, body, html {
    height: 100%;
  }

  #root {
    min-width: 900px;
    width: 100vw;
    margin: 0 auto;
  }

  body, button, textarea, input {
    font: ${mixins.typography.paragraph} ${mixins.fonts.normal};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

`;
