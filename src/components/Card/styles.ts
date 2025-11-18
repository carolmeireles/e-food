import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  position: relative;
  font-size: 14px;

  img {
    width: 100%;
    height: 217px;
    object-fit: fill;
  }
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
`;

export const TitleContainer = styled.div`
  padding: 8px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  font-size: 18px;

  div {
    font-weight: bold;

    img {
      margin-left: 8px;
      width: 21px;
      height: 21px;
    }
  }
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Desc = styled.p`
  line-height: 22px;
  padding: 0 8px 16px;
`;

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.lightBeige};
  padding: 6px 4px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin: 0 0 8px 8px;
  display: inline-block;
  text-decoration: none;
`;
