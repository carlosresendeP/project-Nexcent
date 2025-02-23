import { Container, Content } from "./styles";
import GlobalStyles from '../../Styles/globalstyles'

import logo1 from "../../assets/Logos-Clients/Logo1.svg";
import logo2 from "../../assets/Logos-Clients/Logo2.svg";
import logo3 from "../../assets/Logos-Clients/Logo3.svg";
import logo4 from "../../assets/Logos-Clients/Logo4.svg";
import logo5 from "../../assets/Logos-Clients/Logo5.svg";
import logo6 from "../../assets/Logos-Clients/Logo6.svg";
import logo7 from "../../assets/Logos-Clients/Logo7.svg";

export function Clients(){

    return(
        <Container>
        <GlobalStyles />
            <Content>
                <h2>Nossos clientes</h2>
                <p>Temos trabalhado com fortuna com mais de 500 clientes</p>
                <div>
                    <img src={logo1} alt="Client 1"/>
                    <img src={logo2} alt="Client 1"/>
                    <img src={logo3} alt="Client 1"/>
                    <img src={logo4} alt="Client 1"/>
                    <img src={logo5} alt="Client 1"/>
                    <img src={logo6} alt="Client 1"/>
                    <img src={logo7} alt="Client 1"/>
                </div>
            </Content>
        </Container>
    )
}