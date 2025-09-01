import { Link } from 'react-router-dom'

import estrela from '../../assets/estrela.png'
import { Button, CardContainer, Desc, Tags, Title, TitleContainer } from './styles'
import Tag from '../Tag'

type Props = {
    imagem: string
    tags: string[]
    titulo: string
    nota: number
    desc: string
    link: string
}

const Card = ({ imagem, tags, titulo, nota, desc, link }: Props) => (
    <CardContainer>
        <img src={imagem} alt="massa" />
        <Tags>
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
        </Tags>
        <TitleContainer>
            <Title>{titulo}</Title>
            <div>
                {nota}
                <img src={estrela} alt="Estrela" />
            </div>
        </TitleContainer>
        <Desc>
            {desc}
        </Desc>
        <Link to={link}>
            <Button>Saiba mais</Button>
        </Link>
    </CardContainer>
)

export default Card