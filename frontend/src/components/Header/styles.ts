import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderComponent = styled.header`
  background-color: ${mixins.colors.darkgray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.9rem 2rem;

  img {
    width: 8rem;
  }
`;

export const Container = styled.div`
  color: ${mixins.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: ${mixins.typography.subTitle};
      font-family: ${mixins.fonts.semi_bold};
    }

    p {
      font-size: 0.7rem;
      font-family: ${mixins.fonts.normal};
      font-weight: 300;
    }
  }

  button {
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: transparent;
    position: relative;

    &:after,
    &:before {
      opacity: 0;
      pointer-events: none;
      bottom: 100%;
      left: 50%;
      position: absolute;
      z-index: 10;
      transform: translate(-50%, 10px);
      transform-origin: top;
      transition: 0.18s;
      bottom: auto;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -10px);
    }

    &:after {
      background-color: #f0f0f0;
      box-shadow: 0 0 3px #ddd;
      content: attr(data-title);
      padding: 0.6rem;
      white-space: nowrap;
      border-radius: 1rem;
    }

    &:before {
      width: 0;
      height: 0;
      content: "";
      margin-bottom: 6px;
    }

    &:hover:before,
    &:hover:after {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0);
      margin-top: 0.3rem;
    }
  }

  @media screen and (max-width: 700px){
    display: none;
  }
`
