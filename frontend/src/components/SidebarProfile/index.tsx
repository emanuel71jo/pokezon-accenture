import { Sidebar, Imagem, ContainerImg } from "./styles";
import { NavLink } from "react-router-dom";
import img from "../../assets/p.jpg";

export function SidebarProfile({
  fileName,
  userName,
}: {
  fileName?: string;
  userName: string;
}) {
  return (
    <Sidebar>
      <ContainerImg>
        <Imagem
          src={!!fileName ? `http://localhost:3333/uploads/${fileName}` : img}
          alt="Foto de perfil"
        />
        <span>Olá, {userName}!</span>
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
