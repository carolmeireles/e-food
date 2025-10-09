import CardList from "../../components/CardList";
import Hero from "../../components/Hero";
import { useGetListaRestaurantesQuery } from "../../services/api";

export interface Cardapio {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type Restaurante = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Cardapio[]
}

const Home = () => {
    const { data: listaRestaurantes } = useGetListaRestaurantesQuery()
    
    if(!listaRestaurantes) {
        return <h3>Carregando...</h3>
    }
    
    return (
        <>
            <Hero />
            <CardList restaurantes={listaRestaurantes} />
        </>
    )
}

export default Home