import SidebarProfile from '../../components/SidebarProfile'
import { ContainerProfile, Container, Dados, ContainerDados, Button } from './styles'

export function Profile() {
  
  return ( 
    <ContainerProfile>

    <SidebarProfile />
    
  <Container>

 
    <h2>Dados pessoais</h2>
    <Dados>
        
        <ContainerDados>
          
          <label>Nome completo</label>
          <input type="text" />
          
          <label>E-mail</label>
          <input type="text" />
          
          <label>Telefone</label>
          <input type="text" />

          <label>Gênero</label>
          <select value= "" >
            <option value=" "> </option>
            <option value="Mulher "> Mulher cisgênero </option>
            <option value="homem cisgênero"> Homem cisgênero </option>
            <option value="Mulher transgênero"> Mulher transgênero </option>
            <option value="homem transgênero"> Homem transgênero </option>
            <option value="Não-binário"> Não-binário </option>
          </select>
            
          <label>Origem</label>
          <input type="text" />
             
            <Button>SALVAR ALTERAÇÕES</Button>

        </ContainerDados>

    </Dados>
  </Container>
  </ContainerProfile>
  )
}
