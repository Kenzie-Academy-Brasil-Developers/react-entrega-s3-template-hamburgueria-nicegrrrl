import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ search, products, addProduct }) => {
  return (
    <>
      {/* <span>Produtos listados: {products.length}</span>
      {search ? <p>Resultados de busca para: {search}</p> : null} */}

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
