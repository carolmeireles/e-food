import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 384px;

    .container {
        position: relative;
        padding-top: 260px;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }
`

export const Logo = styled.h1`
    position: absolute;
    top: 64px;
`

export const Slogan = styled.h2`
    padding-bottom: 40px;
    font-weight: 900;
    font-size: 36px;
    text-align: center;
    max-width: 540px;
`