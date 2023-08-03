import styles from "./style.module.scss";

export const ProductCard = ({ product, addProduct }) => {
  return (
    <li className={styles.card}>
      <img className={styles.img} src={product.img} alt={product.name} />
      <div className={styles.productInfo}>
        <h3 className="heading3">{product.name}</h3>
        <span className={`${styles.spanCategory} caption`}>
          {product.category}
        </span>
        <span className={`${styles.spanPrice} body600Typography`}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          className={`buttonMedium gray ${styles.button}`}
          onClick={() => addProduct(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
