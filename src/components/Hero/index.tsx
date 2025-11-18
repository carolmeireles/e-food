import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import background from "../../assets/fundo1.png";
import { Header, Logo, Slogan } from "./styles";

const Hero = () => (
  <Header style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <Logo>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
      </Logo>
      <div>
        <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
      </div>
    </div>
  </Header>
);

export default Hero;
