import { Container, Titulo } from "./styles";

type Props = {
  restaurante: Restaurante;
};

const Banner = ({ restaurante }: Props) => (
  <Container style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <div className="container">
      <h2>{restaurante.tipo}</h2>
      <div>
        <Titulo>{restaurante.titulo}</Titulo>
      </div>
    </div>
  </Container>
);

export default Banner;
