import { HeaderComponent, Container } from "./styles";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
import { FiShoppingCart, FiLogOut, FiUser } from "react-icons/fi";

export function Header() {
  const { auth, signOut } = useAuth();

  return (
    <HeaderComponent isAuthenticated={auth !== ""}>
      <img src={Logo} alt="Pokezon" />
      {auth !== "" && (
        <Container>
          <div>
            <h2>Meu Carrinho</h2>
            <p>0 itens</p>
          </div>
          <button onClick={signOut}>
            <FiShoppingCart size="1.3rem" />
          </button>
          <button onClick={signOut}>
            <FiUser size="1.3rem" />
          </button>
          <button onClick={signOut}>
            <FiLogOut size="1.3rem" />
          </button>
        </Container>
      )}
    </HeaderComponent>
  );
}
