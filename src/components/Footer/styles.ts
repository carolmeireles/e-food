import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.footer`
    background-color: ${cores.bege};
    font-size: 10px;
    padding: 40px 0;
`

export const Logo = styled.h1`
    display: flex;
    justify-content: center;
`

export const SocialLinks = styled.ul`
    display: flex;
    padding-top: 32px;
    justify-content: center;

    .facebook {
        padding: 0 8px;
    }
`

export const Disclaimer = styled.p`
    padding-top: 80px;
    text-align: center;
`