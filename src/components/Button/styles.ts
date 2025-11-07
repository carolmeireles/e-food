import styled from "styled-components";
import { cores } from "../../styles";

export const Botao = styled.button`
    width: 100%;
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
    margin: 0;
    margin-bottom: 8px;
    font-size: 14px;

    &.margin-top {
        margin-top: 16px;
    }
`