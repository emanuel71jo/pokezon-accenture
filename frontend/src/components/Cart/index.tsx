import { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useShopping } from "../../hooks/useShopping";
import {
  Button,
  ButtonExitModal,
  CartTable,
  Container,
  Modal,
  ProductTable,
  Total,
  Wrapper,
} from "./styles";

export function Cart() {
  const {
    shopping,
    addItemToShopping,
    removeAllItemFromShopping,
    removeItemFromShopping,
    total,
  } = useShopping();

  const { auth } = useAuth();
  const { handleSubmit } = useShopping();

  const [showModal, setShowModal] = useState(false);

  const handleToogleShowModal = async () => {
    if (auth !== "") {
      handleSubmit();
    }
    setShowModal((oldValue) => !oldValue);
  };

  return (
    <Container>
      {showModal && (
        <Modal>
          <Wrapper>
            <ButtonExitModal onClick={handleToogleShowModal}>
              <FiX color="black" size="1.3rem" />
            </ButtonExitModal>
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/814.png"
              alt="Pokemon compra finalizada"
            />
            <h1>
              {auth === ""
                ? "Ops!! Aconteceu um problema"
                : "Compra realizada com sucesso!"}
            </h1>
            <h2>
              {auth === ""
                ? "Para finalizar a sua compra você precisa está autenticado."
                : "Em breve você receberá os seus pokémons para iniciar sua jornada, fique atento."}
            </h2>
            <Button>
              {auth === "" ? (
                <Link to="/login">Ir para a tela de Login</Link>
              ) : (
                <Link to="/home">Voltar para tela inicial</Link>
              )}
            </Button>
          </Wrapper>
        </Modal>
      )}
      <CartTable>
        <h2>Carrinho</h2>
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
                  <strong>Nº: {item.item.id}</strong>
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
                      onClick={() => addItemToShopping(item.item, true)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <h2>{item.subTotal}</h2>
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
            <strong>{total}</strong>
          </Total>
        </footer>
      </CartTable>
    </Container>
  );
}
