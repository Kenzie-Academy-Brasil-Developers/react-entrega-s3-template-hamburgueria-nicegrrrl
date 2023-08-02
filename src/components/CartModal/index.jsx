import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({
  cartList,
  removeProduct,
  removeAllProducts,
  setIsOpen,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div role="dialog">
      <div>
        <h2>Carrinho de compras</h2>
        <button
          aria-label="close"
          title="Fechar"
          onClick={() => setIsOpen(false)}
        >
          <MdClose size={21} />
        </button>
      </div>
      <div>
        <ul>
          {cartList.map((product) => (
            <CartItemCard
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          ))}
        </ul>
      </div>
      <div>
        <div>
          <span>Total</span>
          <span>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button onClick={removeAllProducts}>Remover todos</button>
      </div>
    </div>
  );
};
