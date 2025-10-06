import styled from 'styled-components'
import { cores } from '../../styles'
//import excluir from '../../assets/excluir.png'

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex; //tirar depois
    justify-content: flex-end;
    z-index: 1;
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
`

export const CartItem = styled.li`
    display: flex;
    padding: 8px 0 12px 8px;
    position: relative;
    background-color: ${cores.bege};
    color: ${cores.rosa};

    > img {
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

    button {
        background-color: transparent;
        border: none;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
`

export const Total = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.bege};
    display: flex;
    justify-content: space-between;
    padding: 24px 0 16px;
`

export const Button = styled.button`
    width: 100%;
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
    margin: 0;
`