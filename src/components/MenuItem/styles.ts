import styled from "styled-components"
import { cores } from "../../styles"

export const MenuContainer = styled.div`
    background-color: ${cores.rosa};
    color: ${cores.bege};
    font-size: 14px;
    padding: 8px;

    img {
        width: 100%;
    }
`

export const Title = styled.h3`
    font-weight: 900;
    padding-top: 8px;
    font-size: 16px;
`

export const Desc = styled.p`
    padding: 8px 0;
    font-weight: 400;
    line-height: 22px;
`

export const Button = styled.button`
    width: 100%;
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
`