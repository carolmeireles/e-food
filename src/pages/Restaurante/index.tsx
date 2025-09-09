import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import type { Restaurante } from "../Home"

const Restaurante = () => {
    const { id } = useParams()

    const [restaurante, setRestaurante] = useState<Restaurante>()

    useEffect(() => {
        fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
            .then(response => response.json())
            .then(response => setRestaurante(response))
    }, [id])

    if(!restaurante) {
        return <h3>Carregando...</h3>
    }
    
    return (
        <>
            <Header />
            <Banner restaurante={restaurante} />
            <Menu restaurante={restaurante} />
        </>
    )
}

export default Restaurante