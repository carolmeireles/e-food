import styled from "styled-components";
import { cores } from "../../styles";

export const Botao = styled.button`
    width: 100%; //card e modal não tem
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
`

export const Btn = styled.button`
    background-color: ${cores.rosa};
    color: ${cores.begeClaro};
    padding: 6px 4px;
    font-weight: bold;
    font-size: 14px;
    border: none;
    cursor: pointer;
    margin: 0 0 8px 8px;
`