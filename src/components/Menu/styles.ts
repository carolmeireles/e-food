import styled from 'styled-components'

export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 56px;
    margin-bottom: 120px;
`

export const Modal = styled.div`
    display: flex;

    &.invisible {
        //display: none;
    }
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: space-between;
`