import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

export const CartModal = ({
  cartList,
  removeProduct,
  removeAllProducts,
  setIsOpen,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        // setIsOpen(false);
        buttonRef.current?.click();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="heading3 white">Carrinho de compras</h2>
          <button
            className={styles.buttonClose}
            ref={buttonRef}
            aria-label="close"
            title="Fechar"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.modalContent}>
          <div>
            <ul className={styles.list}>
              {cartList.length > 0 ? (
                cartList.map((product) => (
                  <CartItemCard
                    key={product.id}
                    product={product}
                    removeProduct={removeProduct}
                  />
                ))
              ) : (
                <p className="bodyTypography">O carrinho está vazio 😅</p>
              )}
            </ul>
          </div>
          <div>
            <div className={styles.totalValue}>
              <span className="body600Typography">Total</span>
              <span className="body600Typography gray">
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button
              className="buttonDefault gray full"
              onClick={removeAllProducts}
            >
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
