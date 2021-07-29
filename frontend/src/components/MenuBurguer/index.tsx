import { slide as Menu } from 'react-burger-menu'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useAuth } from '../../hooks/useAuth'
import {
    FiShoppingCart,
    FiLogOut,
    FiUser,
    FiHome,
    FiLogIn,
} from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useShopping } from '../../hooks/useShopping'
import './stylesbuguer.css'
//import { BurguerMenu } from './styles'

function MenuBurguer() {
    const { auth, signOut } = useAuth()
    const { getTotalItems } = useShopping()
    const history = useHistory()

    return (
        <Menu right >
            <div id="container_burguer">
                <div>
                    <h2>Meu Carrinho</h2>
                    <p>{getTotalItems()} itens</p>
                </div>
                {auth !== '' && (
                    <button onClick={() => history.push('/profile')}>
                       <p className='page'> Perfil </p>
                        <FiUser color="#1A1A1A" margin-right="0.5rem" size="1.3rem" />
                    </button>
                )}
                <button onClick={() => history.push('/home')}>
                <p className='page'> Home</p>
                    <FiHome color="#1A1A1A" margin-right="0.5rem" size="1.3rem" />
                </button>
                <button onClick={() => history.push('/pokecart')}>
                <p className='page'> Carrinho</p>
                    <FiShoppingCart color="#1A1A1A" margin-right="0.5rem" size="1.3rem" />
                </button>
                {auth === '' ? (
                    <button
                        onClick={() => {
                            history.push('/')
                        }}
                    >
                      <p className='page'>  Entrar</p>
                        <FiLogIn color="#1A1A1A" size="1.3rem" />
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            signOut()
                            history.push('/')
                        }}
                    >
                       <p className='page'> Sair</p>
                        <FiLogOut color="#1A1A1A" size="1.3rem" />
                    </button>
                )}
                <section className="links">
                    <ul>
                        <AnchorLink href="/">
                        <p>Todos</p>
                        </AnchorLink>

                        <AnchorLink href="#maisVendidos">
                        <p> Mais vendidos </p>
                        </AnchorLink>

                        <AnchorLink href="#promocao">Promoções</AnchorLink>

                        <AnchorLink href="#lendarios">Lendários</AnchorLink>
                    </ul>
                </section>
            </div>
        </Menu>
    )
}

export default MenuBurguer;