import Card from '../Card'
import { List } from './styles'
import { Restaurante } from '../../pages/Home'

type Props = {
    restaurantes: Restaurante[]
}

const CardList = ({ restaurantes }: Props) => { 

    const getTags = (restaurante: Restaurante) => {
        const tags = []

        if(restaurante.tipo) {
            tags.push(restaurante.tipo)
        }

        if(restaurante.destacado) {
            tags.push(`destaque`)
        }

        return tags
    }

    return (
        <div className="container">
            <List>
                {restaurantes.map((restaurante) => (
                    <li key={restaurante.id}>
                        <Card
                            id={restaurante.id}
                            imagem={restaurante.capa}
                            tags={getTags(restaurante)}
                            titulo={restaurante.titulo}
                            nota={restaurante.avaliacao}
                            desc={restaurante.descricao}
                        />
                    </li>
                ))}
            </List>
        </div>
    )
}

export default CardList