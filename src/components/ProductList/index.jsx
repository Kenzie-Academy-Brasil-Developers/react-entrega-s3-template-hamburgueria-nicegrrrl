import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ search, products, addProduct }) => {
  return (
    <>
      <div className={`container ${styles.textBox}`}>
        <span className="bodyTypography">
          Produtos listados: {products.length}
        </span>
        {search ? (
          <p className="bodyTypography">
            Resultados de busca para: <i>{search}</i>
          </p>
        ) : null}
      </div>

      {products.length > 0 ? (
        <ul className={styles.productList}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado</p>
      )}
    </>
  );
};
