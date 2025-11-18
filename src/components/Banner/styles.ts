import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  position: relative;

  .container {
    position: relative;
    padding-top: 215px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;

    h2 {
      position: absolute;
      top: 25px;
      font-weight: 100;
      color: ${colors.white};
      font-style: thin;
      font-size: 32px;
    }
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
  }
`;

export const Titulo = styled.h1`
  font-weight: 900;
  font-style: black;
  color: ${colors.white};
  font-size: 32px;
`;
