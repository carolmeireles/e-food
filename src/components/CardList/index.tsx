import Card from "../Card";
import { List } from "./styles";

type Props = {
  restaurantes: Restaurante[];
};

const CardList = ({ restaurantes }: Props) => {
  const getTags = (restaurante: Restaurante) => {
    const tags = [];

    if (restaurante.type) {
      tags.push(restaurante.type);
    }

    if (restaurante.featured) {
      tags.push(`destaque`);
    }

    return tags;
  };

  return (
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Card
              id={restaurante.id}
              imagem={restaurante.cover}
              tags={getTags(restaurante)}
              titulo={restaurante.title}
              nota={restaurante.rating}
              desc={restaurante.description}
            />
          </li>
        ))}
      </List>
    </div>
  );
};

export default CardList;
