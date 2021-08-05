import SidebarProfile from "../../components/SidebarProfile";
import { useAuth } from "../../hooks/useAuth";
import { Button, ContainerDados, ContainerProfile, Dados } from "./styles";

export function Profile() {
  const { profile } = useAuth();

  return (
    <ContainerProfile>
      <SidebarProfile
        fileName={profile?.fileName}
        userName={`${profile?.firstName} ${profile?.lastName}`}
      />
      <div>
        <h2>Dados pessoais</h2>
        <Dados>
          <ContainerDados>
            <label>Nome</label>
            <input disabled type="text" value={profile?.firstName || ""} />
            <label>Sobrenome</label>
            <input disabled type="text" value={profile?.lastName || ""} />
            <label>E-mail</label>
            <input disabled type="text" value={profile?.email || ""} />
            <Button disabled>SALVAR ALTERAÇÕES</Button>
          </ContainerDados>
        </Dados>
      </div>
    </ContainerProfile>
  );
}
