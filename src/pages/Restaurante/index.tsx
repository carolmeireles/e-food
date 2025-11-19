import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { useGetRestauranteQuery } from "../../services/api";

const Restaurante = () => {
  const { id } = useParams();
  const { data: restaurante } = useGetRestauranteQuery(id!);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <Menu restaurante={restaurante} />
    </>
  );
};

export default Restaurante;
