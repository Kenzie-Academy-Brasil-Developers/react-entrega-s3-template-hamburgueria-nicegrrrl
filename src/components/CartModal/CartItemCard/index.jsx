import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardInfo}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
      <button
      className={styles.buttonDelete}
        aria-label="delete"
        title="Remover item"
        onClick={() => removeProduct(product.id)}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
