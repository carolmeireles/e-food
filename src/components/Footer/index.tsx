import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import { Container, Disclaimer, SocialLinks } from './styles'
import { Logo } from '../Footer/styles'
import { Link } from 'react-router-dom'

const Footer = () => (
    <Container>
        <div className="container">
            <Logo>
                <Link to='/'>
                    <img src={logo} alt="efood" />
                </Link>
            </Logo>
            <SocialLinks>
                <li>
                    <a href="https://www.instagram.com/" target='_blank'>
                        <img src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li className='facebook'>
                    <a href="https://www.facebook.com/" target='_blank' >
                        <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/" target='_blank'>
                        <img src={twitter} alt="Twitter" />
                    </a>
                </li>
            </SocialLinks>
            <Disclaimer>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </Disclaimer>
        </div>
    </Container>
)

export default Footer