import { Container, Titulo } from "./styles";

type Props = {
  restaurante: Restaurante;
};

const Banner = ({ restaurante }: Props) => (
  <Container style={{ backgroundImage: `url(${restaurante.cover})` }}>
    <div className="container">
      <h2>{restaurante.type}</h2>
      <div>
        <Titulo>{restaurante.title}</Titulo>
      </div>
    </div>
  </Container>
);

export default Banner;
