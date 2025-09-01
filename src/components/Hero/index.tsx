import { Header, Logo, Slogan } from './styles'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo1.png'
import { Link } from 'react-router-dom'

const Hero = () => (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
            <Logo>
                <Link to='/'>
                    <img src={logo} alt="efood" />
                </Link>
            </Logo>
            <div>
                <Slogan>
                    Viva experiências gastronômicas no conforto da sua casa
                </Slogan>
            </div>
        </div>
    </Header>
)

export default Hero