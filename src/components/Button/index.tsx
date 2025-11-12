import { Botao } from "./styles"

export type Props = {
    onClick?: () => void
    children: string
    type?: 'submit' | 'reset' | 'button'
    className?: string
    disabled?: boolean
}

const Button = ({onClick, children, type, className, disabled} : Props) => {
    return (
        <Botao onClick={onClick} type={type} className={className} disabled={disabled}>
            {children}
        </Botao>
    )
}

export default Button