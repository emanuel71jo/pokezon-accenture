import { Sidebar, Imagem, ContainerImg } from "./styles";
import { NavLink } from "react-router-dom";
import img from "../../assets/p.jpg";

export function SidebarProfile() {
  return (
    <Sidebar>
      <ContainerImg>
        <Imagem src={img} alt="Foto de perfil" />
        <span>Olá, Bárbara!</span>
      </ContainerImg>

      <ul>
        <li>
          {" "}
          <NavLink to="/profile"> Dados Pessoais </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/orders"> Pedidos </NavLink>{" "}
        </li>
      </ul>
    </Sidebar>
  );
}

export default SidebarProfile;
