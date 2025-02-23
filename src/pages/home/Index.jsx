import HeroImage from '../../assets/Hero-image.svg'
import unlockImage from '../../assets/unlock-image.svg'
import EventIcon from '../../assets/icons/event.svg'
import ClubIcon from '../../assets/icons/clubs-1.svg'
import MemberIcon from '../../assets/icons/Members.svg'
import PayIcon from '../../assets/icons/payments.svg'
import pana from '../../assets/pana.svg'
import logo from '../../assets/Logo.svg'
import iconsend from '../../assets/icons/send.svg'




import { Container, Content, HeroContent, Unlock, Title, UnlockContent, Achievements, AchievementsCards, Card, AchievementsContent, CommunityUpdates, CardUpdates, CommunityContent, Footer, CompanyInfo, Links  } from './styles'

import GlobalStyles from '../../Styles/globalstyles'
import { Clients } from '../Clients'
import Community from '../Community'
import { Button } from '../../components/Button/styles'



function Home() {


  return (

    <Container>
      <GlobalStyles />
      <Content>
        <HeroContent>
          <h2>
            Lições epercepções <span>de 8 anos</span>
          </h2>
          <p>Onde expandir seu negócio como fotógrafo: site ou mídia social?</p>
          <Button>
            Cadastre-se
          </Button>
        </HeroContent>


        <img src={HeroImage} alt="Programador" />
      </Content>

      <Clients></Clients>

      <Community></Community>


      <Unlock>
        <UnlockContent>
          <img src={unlockImage} alt="Desbloqueo nexcent" />
          <div>
            <Title>
              O invisível de passar três anos na Pixelgrade
            </Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <Button>
              Saiba mais
            </Button>
          </div>
        </UnlockContent>
      </Unlock>


      <Achievements>
        <AchievementsContent>

          <div className='titles'>
            <Title>
              Ajudando uma empresa local<span> a se reinventar</span>
            </Title>
            <p>Chegamos até aqui com muito trabalho e dedicação</p>
          </div>

          <AchievementsCards>
            <Card>
              <img src={MemberIcon} alt="Membros" />
              <div>
                <p>2,245,341</p>
                <span>Membros</span>
              </div>
            </Card>
            <Card>
              <img src={ClubIcon} alt="Clubes" />
              <div>
                <p>46,328</p>
                <span>Clubes</span>
              </div>
            </Card>
            <Card>
              <img src={EventIcon} alt="Eventos" />
              <div>
                <p>828,867</p>
                <span>Eventos</span>
              </div>
            </Card>
            <Card>
              <img src={PayIcon} alt="Pagamentos" />
              <div>
                <p>1,926,436</p>
                <span>Pagamentos</span>
              </div>
            </Card>

          </AchievementsCards>

        </AchievementsContent>

      </Achievements>


      
      <Unlock>
        <UnlockContent>
          <img src={pana} alt="Desbloqueo nexcent" />
          <div>
            <Title>
            Como projetar o rodapé do seu site como nós fizemos
            </Title>
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum.</p>
            <Button>
              Saiba mais
            </Button>
          </div>
        </UnlockContent>
      </Unlock>


      <CommunityUpdates>
        <CommunityContent>
          <div className='titles'>
            <h2>Cuidar é o novo marketing</h2>
            <p>O blog Nexcent é o melhor lugar para ler sobre as últimas informações sobre associação, tendências e muito mais. Veja quem está ingressando na comunidade, leia sobre como nossa comunidade está aumentando a receita de membros e muito mais.</p>
          </div>
          
          <CardUpdates>
            <div className='cards'>
              <h4>Criando processos de proteção simplificados com OneRen</h4>
              <a href="#"> Leia Mais</a>
            </div>
            <div  className='cards'>
              <h4>Quais são as suas responsabilidades de salvaguarda e como você pode gerenciá-las?</h4>
              <a href="#"> Leia Mais</a>
            </div>
            <div  className='cards'>
              <h4>Renovando o modelo de associação com o Triathlon Australia</h4>
              <a href="#"> Leia Mais</a>
            </div>
          </CardUpdates>
        </CommunityContent>


      </CommunityUpdates>

      <Footer>
        {/*<div>
          <h1>
            Nexcent
          </h1>

          <Button>Teste a Demo</Button>
        </div>*/}

        <CompanyInfo>
            <div className='company'>
              <img src={logo} alt="Nextcent" />

              <p>
                Copyright © 2020 Nexcent ltd. <br />
                Todos os direitos reservados.
              </p>


            <div className='social-media'>
              <div>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </CompanyInfo>


        <Links>
          <div className='links'>
            <h3>Compania</h3>
            <ul>
              <li>
                <a href="#">Sobre</a>
                <a href="#">Blog</a>
                <a href="#">Contato</a>
                <a href="#">Preços</a>
                <a href="#">Depopimentos</a>
              </li>
            </ul>
          </div>

          <div className='links'>
            <h3>Suporte</h3>
            <ul>
              <li>
                <a href="#">Central de ajuda</a>
                <a href="#">Termos de serviço</a>
                <a href="#">Contrato Legal</a>
                <a href="#">Politicas de privacidade</a>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          <div className='links'>
            <h3>Mantenha-se atualizado</h3>
            <label htmlFor=""></label>
            <input type="text" placeholder="Digite seu email" />
            <button type='submit'><img src={iconsend} alt='enviar'/></button>
          </div>
        </Links>


      </Footer>





    </Container>
  )
}

export default Home
