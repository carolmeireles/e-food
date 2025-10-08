import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import Hero from "../../components/Hero";

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
    const [restaurante, setRestaurante] = useState<Restaurante[]>([])

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes`)
            .then(response => response.json())
            .then(response => setRestaurante(response))
    }, [])
    
    if(!restaurante) {
        return <h3>Carregando...</h3>
    }
    
    return (
        <>
            <Hero />
            <CardList restaurantes={restaurante} />
        </>
    )
}

export default Home