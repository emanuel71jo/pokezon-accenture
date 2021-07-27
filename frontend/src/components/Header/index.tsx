import { HeaderComponent, Container } from './styles'
import Logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/useAuth'
import {
  FiShoppingCart,
  FiLogOut,
  FiUser,
  FiHome,
  FiLogIn,
} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { useShopping } from '../../hooks/useShopping'

export function Header() {
  const { auth, signOut } = useAuth()
  const { getTotalItems } = useShopping()
  const history = useHistory()

  return (
    <HeaderComponent>
      <Link to="/home">
        <img src={Logo} alt="Pokezon" />
      </Link>
      <Container>
        <div>
          <h2>Meu Carrinho</h2>
          <p>{getTotalItems()} itens</p>
        </div>
        {auth !== '' && (
          <button onClick={() => history.push('/profile')}>
            <FiUser color="white" size="1.3rem" />
          </button>
        )}
        <button onClick={() => history.push('/home')}>
          <FiHome color="white" size="1.3rem" />
        </button>
        <button onClick={() => history.push('/pokecart')}>
          <FiShoppingCart color="white" size="1.3rem" />
        </button>
        {auth === '' ? (
          <button
            onClick={() => {
              history.push('/')
            }}
          >
            <FiLogIn color="white" size="1.3rem" />
          </button>
        ) : (
          <button
            onClick={() => {
              signOut()
              history.push('/')
            }}
          >
            <FiLogOut color="white" size="1.3rem" />
          </button>
        )}
      </Container>
    </HeaderComponent>
  )
}
