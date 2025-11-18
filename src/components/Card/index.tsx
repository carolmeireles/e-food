import { Link } from "react-router-dom";
import Tag from "../Tag";

import starIcon from "../../assets/estrela.png";
import * as S from "./styles";

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
    <S.CardContainer>
      <Link to={`/restaurante/${id}`}>
        <img src={imagem} alt={titulo} />
      </Link>
      <S.Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.Tags>
      <S.TitleContainer>
        <S.Title>{titulo}</S.Title>
        <div>
          {nota}
          <img src={starIcon} alt="Estrela" />
        </div>
      </S.TitleContainer>
      <S.Desc>{desc}</S.Desc>
      <S.ButtonLink
        to={`/restaurante/${id}`}
        title="Clique aqui para ir à página do restaurante"
        type="link"
      >
        Saiba mais
      </S.ButtonLink>
    </S.CardContainer>
  );
};

export default Card;
