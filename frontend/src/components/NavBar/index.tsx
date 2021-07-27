import { Nav, Ul, Link } from './styles'

function NavBar() {
  return (
    <Nav>
      <Ul>
        <Link href="/">
          <p>Todos</p>
        </Link>

        <Link href="#maisVendidos">
          <p> Mais vendidos </p>
        </Link>

        <Link href="#promocoes">Promoções</Link>

        <Link href="#lendarios">Lendários</Link>
      </Ul>
    </Nav>
  )
}

export default NavBar
