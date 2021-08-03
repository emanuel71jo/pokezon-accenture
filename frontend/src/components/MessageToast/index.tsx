import { Container, Title, Description } from "./styles";

interface Props {
  pokeName: string;
}

export function MessageToast({ pokeName }: Props) {
  return (
    <Container>
      <Title>Ops!! Falta pouco para você capturar um {pokeName}</Title>
      <Description>
        Vá para o Carrinho e finalize a captura do seu Pokémon
      </Description>
    </Container>
  );
}
