import { Container, Titulo } from './styles'
import banner from '../../assets/banner.png'

const Banner = () => (
    <Container style={{ backgroundImage: `url(${banner})`}}>
        <div className="container">
            <h2>Italiana</h2>
            <div>
                <Titulo>La Dolce Vita Trattoria</Titulo>
            </div>
        </div>
    </Container>
)

export default Banner