import styled from 'styled-components'
import { cores } from '../../styles'
import { Botao } from '../Menu/styles'

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
`

export const Sidebar = styled.aside`
    background-color: ${cores.rosa};
    padding: 32px 8px 0 8px;
    width: 360px;
    z-index: 1;
    color: ${cores.bege};
    font-size: 14px;
    overflow-y: auto;

    p {
        font-size: 14px;
        line-height: 22px;
        margin: 16px 0 24px;
    }

    ${Botao} {
        margin-bottom: 8px;
    }
`

export const CartItem = styled.li`
    display: flex;
    padding: 8px 0 12px 8px;
    position: relative;
    background-color: ${cores.bege};
    color: ${cores.rosa};
    margin-bottom: 16px;

    img:first-child {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    span {
        font-size: 14px;
        display: block;
        padding-top: 16px;
    }
`

export const Excluir = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
`

export const Total = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.bege};
    display: flex;
    justify-content: space-between;
    padding: 24px 0 16px;
`