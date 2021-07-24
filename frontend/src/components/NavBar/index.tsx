import { Nav, Ul, Link } from './styles';

function NavBar () {
    return (
        <Nav>
            <Ul>
                <Link href="" >
                   <p>Todos</p> 
                </Link>
               
                <Link href="" >
                   <p> Mais vendidos </p>
                </Link>
               
                <Link href="" >
                    Promoções
                </Link>
                
                <Link href="" >
                    Lançamentos
                </Link>

                <Link href="" >
                    Lendários
                </Link>
            </Ul>
        </Nav>
    )
}

export default NavBar