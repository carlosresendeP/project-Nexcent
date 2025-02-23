import {Card, Container, Content, ContentGrid, Title, } from './styles'
import GlobalStyles from '../../Styles/globalstyles'

import IconMemberships from '../../assets/icons/Memberships.svg'
import IconAssociations from '../../assets/icons/Associations.svg'
import IconsClubs from '../../assets/icons/Clubs.svg'

function Community() {
    return (

        <Container>
            <GlobalStyles />

                <Content>
                    <Title>
                        Gerencie toda a sua comunidade em um único sistema
                    </Title>
                    <p>Para quem o Nextcent é adequado?</p>
                </Content>

                <ContentGrid>
                    <Card>
                        <img src={IconMemberships} alt="Organizações Associadas" />
                        <Title>Organizações Associadas</Title>
                        <p>
                            Nosso software de gerenciamento de associação oferece automação total de renovações e pagamentos de associação.
                        </p>
                    </Card>
                    <Card>
                        <img src={IconAssociations} alt="Associações Nacionais" />
                        <Title>Associações Nacionais</Title>
                        <p>
                            Nosso software de gerenciamento de associação oferece automação total de renovações e pagamentos de associação
                        </p>
                    </Card>
                    <Card>
                        <img src={IconsClubs} alt="Clubes e grupos" />
                        <Title>Clubes e grupos</Title>
                        <p>
                            Nosso software de gerenciamento de associação oferece automação total de renovações e pagamentos de associação.
                        </p>
                    </Card>
                </ContentGrid>

        </Container>
    )
}

export default Community
