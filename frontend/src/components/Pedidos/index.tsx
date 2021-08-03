import SidebarProfile from '../../components/SidebarProfile'
import { ContainerProfile, Container, Dados, Pedido, DadosPedido, Button } from './styles'


export function Pedidos() {
  return  (
  
  
  <ContainerProfile>

  <SidebarProfile />
  
  <Container>

  <h2>Pedidos</h2>
  <Dados>
      <Pedido>
          <section>
            <div>
              <h3>DATA DO PEDIDO</h3>
              <span>01/08/2021</span>
            </div>
            
            <div>
              <h3>TOTAL</h3>
              <span>10000,00</span>
            </div>
          </section>

           <section>
            <div className="ID">
              <h3>ID</h3>
              <span>#1</span>
            </div>
           </section>
          
      </Pedido>

      <DadosPedido>
      
       <section>
        <img src="https://projectpokemon.org/images/normal-sprite/arcanine.gif" alt="Pokemon" />
          <div>
          <span className="nome">Arcanine</span>
          <span className="data">Enviado 01/08/2021</span>
          <span className="preco">R$1000,00</span>
          </div>
       </section>
      
        <Button >+ Detalhes</Button>
      
      </DadosPedido>

  </Dados>
  </Container>  
  </ContainerProfile>
)
}

export default Pedidos