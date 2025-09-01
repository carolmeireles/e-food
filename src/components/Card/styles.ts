import styled from "styled-components"
import { cores } from "../../styles"

export const CardContainer = styled.div`
    background-color: ${cores.branco};
    border: 1px solid ${cores.rosa};
    position: relative;
    font-size: 14px;
`

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 20px;
`

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
            padding-left: 8px;
        }
    }
`

export const Title = styled.h3`
    font-weight: bold;
`

export const Desc = styled.p`
    line-height: 22px;
    padding: 0 8px 16px;
`

export const Button = styled.button`
    background-color: ${cores.rosa};
    color: ${cores.begeClaro};
    padding: 6px 4px;
    font-weight: bold;
    font-size: 14px;
    border: none;
    cursor: pointer;
    margin: 0 0 8px 8px;
`