import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    display: block;

    .container {
        position: relative;
        padding-top: 215px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        h2 {
            position: absolute;
            top: 25px;
            font-weight: 100;
            color: ${cores.branco};
            font-style: thin;
            font-size: 32px;
        }
    }
`

export const Titulo = styled.h1`
    font-weight: 900;
    font-style: black;
    color: ${cores.branco};
    font-size: 32px;
`