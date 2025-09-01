import { createGlobalStyle } from 'styled-components'

export const cores = {
    rosa: '#E66767',
    bege: '#FFEBD9',
    begeClaro: '#FFF8F2',
    branco: '#fff'
}

export const CssGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.begeClaro};
        color: ${cores.rosa};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`