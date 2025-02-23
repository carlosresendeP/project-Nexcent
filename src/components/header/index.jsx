import GlobalStyles from '../../Styles/globalstyles'
import Logo from '../../assets/logo.svg';
import {Container, Navigate, Button} from './styles';

export function Header(){


    return(
        
        <Container>
        <GlobalStyles />
            <img src={Logo} alt="Nextcent" />

            <Navigate>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Serviços</a>
                    <a href="#">Recurso</a>
                    <a href="">Productos</a>
                    <a href="#">Depopimentos</a>
                    <a href="#">FAQ</a>
                </nav>


            </Navigate>

            <div>
                    <Button className='Login'>Entrar</Button>
                    <Button>Inscrever-se</Button>
            </div>

            
        </Container>
    )
}