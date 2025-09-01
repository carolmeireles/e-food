import Card from '../Card'
import { List } from './styles'
import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'

const CardList = () => (
    <div className="container">
        <List>
            <li>
                <Card
                    imagem={sushi}
                    tags={['Destaque da semana', 'Japonesa']}
                    titulo='Hioki Sushi'
                    nota={4.9}
                    desc='Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
                    link='/'
                />
            </li>
            <li>
                <Card
                    imagem={massa}
                    tags={['Italiana']}
                    titulo='La Dolce Vita Trattoria'
                    nota={4.6}
                    desc='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já'
                    link='/restaurante'
                />
            </li>
            <li>
                <Card
                    imagem={massa}
                    tags={['Italiana']}
                    titulo='La Dolce Vita Trattoria'
                    nota={4.6}
                    desc='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já'
                    link='/restaurante'
                />
            </li>
            <li>
                <Card
                    imagem={massa}
                    tags={['Italiana']}
                    titulo='La Dolce Vita Trattoria'
                    nota={4.6}
                    desc='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já'
                    link='/restaurante'
                />
            </li>
            <li>
                <Card
                    imagem={massa}
                    tags={['Italiana']}
                    titulo='La Dolce Vita Trattoria'
                    nota={4.6}
                    desc='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já'
                    link='/restaurante'
                />
            </li>
            <li>
                <Card
                    imagem={massa}
                    tags={['Italiana']}
                    titulo='La Dolce Vita Trattoria'
                    nota={4.6}
                    desc='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já'
                    link='/restaurante'
                />
            </li>
        </List>
    </div>
)

export default CardList