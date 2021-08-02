import React from "react";
import { FiX } from "react-icons/fi";
import {
  ButtonAdicionarCarrinho,
  ButtonClose,
  Foto,
  ModalBack,
  ModalBox,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./styles";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalBack>
      <ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />
      <ModalBox>
        <Foto>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
        </Foto>
        <ButtonAdicionarCarrinho>Quero pra mim!</ButtonAdicionarCarrinho>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          <p>ID:</p>

          <p>Tipo:</p>

          <p>Região:</p>

          <p>Geração:</p>

          <p>Peso:</p>

          <p>Altura:</p>

          <p>Habilidades:</p>
        </ModalContent>
        <ButtonClose onClick={onClose}>
          <FiX color="black" size="1.3rem" />
        </ButtonClose>
      </ModalBox>
    </ModalBack>
  ) : null;
};
