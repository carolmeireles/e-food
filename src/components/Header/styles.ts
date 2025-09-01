import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderStyle = styled.header`
    width: 100%;
    height: 186px;

    .container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 63px;
        font-weight: 900;
        font-size: 18px;

        a {
            text-decoration: none;
            color: ${cores.rosa};
        }
    }
`