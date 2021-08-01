import React from "react";
import { ModalBack, ModalBox, ModalContent, ModalOverlay, ModalTitle } from './styles'

interface ModalProps{
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    }

    return isOpen ? (
        <ModalBack>
      <ModalOverlay
        ref={outsideRef}
        onClick={handleCloseOnOverlay}
      />
      <ModalBox>
        <button onClick={onClose}>
          close
        </button>
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalContent>
          { children }
        </ModalContent>
      </ModalBox>
    </ModalBack>
  ) : null;
};
