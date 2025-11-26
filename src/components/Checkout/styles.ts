import styled from "styled-components";
import { colors } from "../../styles";

type InputGroupProps = {
  $maxWidth?: string;
};

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;

  &.display-none {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  width: 100%;
  max-width: ${(props) => props.$maxWidth || "auto"};
  font-weight: bold;

  input {
    background-color: ${colors.beige};
    border: none;
    height: 32px;
    padding: 0 8px;
    font-weight: bold;
    color: #4b4b4b;
    margin-top: 8px;

    &.error {
      border: 2px solid red;
    }
  }
`;
