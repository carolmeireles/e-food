import styled from 'styled-components'
import { Botao } from '../../components/Menu/styles'
import { cores } from '../../styles'

type InputGroupProps = {
    maxWidth?: string
}

export const Titulo = styled.h3`
    font-size: 16px;
    margin-bottom: 16px;
`

export const Form = styled.div`

    ${Botao} {
        margin-bottom: 8px;
        font-size: 14px;

        &.margin-top {
            margin-top: 16px;
        }
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

export const InputGroup = styled.div<InputGroupProps>`
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
    width: 100%;
    max-width: ${(props) => props.maxWidth || 'auto'};
    font-weight: bold;

    input {
        background-color: ${cores.bege};
        border: none;
        height: 32px;
        padding: 0 8px;
        font-weight: bold;
        color: #4b4b4b;
        margin-top: 8px;
    }
`