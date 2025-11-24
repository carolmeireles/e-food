import CardList from "../../components/CardList";
import Hero from "../../components/Hero";
import { useGetListaRestaurantesQuery } from "../../services/api";

const Home = () => {
  const { data: listaRestaurantes } = useGetListaRestaurantesQuery();

  if (!listaRestaurantes) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Hero />
      <CardList restaurantes={listaRestaurantes} />
    </>
  );
};

export default Home;
