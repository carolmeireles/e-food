import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const Btn = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  font-weight: bold;
  padding: 4px 0;
  cursor: pointer;
  margin: 0;
  font-size: 14px;

  &.margin-top {
    margin-top: 16px;
  }
`;

export const Container = styled.div`
  display: relative;
`;

export const BtnLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.begeClaro};
  padding: 6px 4px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin: 0 0 8px 8px;
  display: inline-block;
  text-decoration: none;
`;
