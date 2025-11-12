import { Botao } from "./styles"

export type Props = {
    onClick?: () => void
    children: string
    type?: 'submit' | 'reset' | 'button'
    className?: string
}

const Button = ({onClick, children, type, className} : Props) => {
    return (
        <Botao onClick={onClick} type={type} className={className}>
            {children}
        </Botao>
    )
}

export default Button