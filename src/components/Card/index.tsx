import { Link } from "react-router-dom";

import estrela from "../../assets/estrela.png";
import {
  CardContainer,
  Desc,
  Tags,
  Title,
  TitleContainer,
  ButtonLink,
} from "./styles";
import Tag from "../Tag";

type Props = {
  id: number;
  imagem: string;
  tags: string[];
  titulo: string;
  nota: number;
  desc: string;
};

const Card = ({ id, imagem, tags, titulo, nota, desc }: Props) => {
  return (
    <CardContainer>
      <Link to={`/restaurante/${id}`}>
        <img src={imagem} alt={titulo} />
      </Link>
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
      <Desc>{desc}</Desc>
      <ButtonLink
        to={`/restaurante/${id}`}
        title="Clique aqui para ir à página do restaurante"
        type="link"
      >
        Saiba mais
      </ButtonLink>
    </CardContainer>
  );
};

export default Card;
