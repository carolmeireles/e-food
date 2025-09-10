import Card from '../Card'
import { List } from './styles'
import type { Restaurante } from '../../pages/Home'

type Props = {
    restaurantes: Restaurante[]
}

const CardList = ({ restaurantes }: Props) => { 
    return (
        <div className="container">
            <List>
                {restaurantes.map((restaurante) => (
                    <li key={restaurante.id}>
                        <Card
                            id={restaurante.id}
                            imagem={restaurante.capa}
                            tags={restaurante.tipo}
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