import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 56px;
    margin-bottom: 120px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

export const MenuItem = styled.div`
    background-color: ${cores.rosa};
    color: ${cores.bege};
    font-size: 14px;
    padding: 8px;
    cursor: pointer;

    img {
        width: 100%;
        height: 200px;
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

export const Modal = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    align-items: center;
    justify-content: center;

    &.invisible {
        display: none;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    position: relative;
    z-index: 1;
    background-color: ${cores.rosa};
    color: ${cores.branco};
    padding: 32px;
    font-size: 14px;

    img {
        width: 280px;
    }

    header {
        position: absolute;
        top: 16px;
        right: 16px;
        width: auto;
        height: auto;
        background: none;
        z-index: 2;

        img {
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }

    div {
        padding-left: 24px;
    }

    h4 {
        font-size: 18px;
        font-weight: 900;
    }

    p {
        padding: 16px 0;
        line-height: 22px;
    }

    button {
        background-color: ${cores.bege};
        color: ${cores.rosa};
        margin: 0;
    }
`

export const Botao = styled.button`
    width: 100%;
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
    margin: 0;
    font-size: 14px;
`