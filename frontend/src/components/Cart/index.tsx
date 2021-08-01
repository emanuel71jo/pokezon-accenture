import { useState } from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useShopping } from "../../hooks/useShopping";
import { FiX } from "react-icons/fi";

import {
  CartTable,
  Container,
  ProductTable,
  Total,
  Modal,
  Wrapper,
  ButtonExitModal,
} from "./styles";

export function Cart() {
  const {
    shopping,
    addItemToShopping,
    removeAllItemFromShopping,
    removeItemFromShopping,
  } = useShopping();

  const [showModal, setShowModal] = useState(false);

  const handleToogleShowModal = () => setShowModal((oldValue) => !oldValue);

  return (
    <Container>
      {/**
       * Modal de finalização de pedido
       */}
      {showModal && (
        <Modal>
          <Wrapper>
            <ButtonExitModal onClick={handleToogleShowModal}>
              <FiX color="black" size="1.3rem" />
            </ButtonExitModal>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AYWDCSu8E69WHZKThclSjstlfPFR1086Tg&usqp=CAU'/> 
            <h1>Compra finalizada</h1>
            <h2>Em breve você receberá um e-mail com todos os detalhes!!!</h2>
          </Wrapper>
        </Modal>
      )}
      <CartTable>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {shopping.map((item, index) => (
              <tr key={index} data-testid="product">
                <td>
                  <img src={item.item.image} alt={item.item.name} />
                </td>
                <td>
                  <strong>{item.item.id}</strong>
                  <span>{item.item.name}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      onClick={() => removeItemFromShopping(item.item)}
                      disabled={item.count === 1}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={item.count}
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => addItemToShopping(item.item)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <h2>R$ 10000</h2>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => removeAllItemFromShopping(item.item)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <button type="button" onClick={handleToogleShowModal}>
            Finalizar pedido
          </button>
          <Total>
            <span>TOTAL</span>
            <strong>R$ 1000,00</strong>
          </Total>
        </footer>
      </CartTable>
    </Container>
  );
}
