import { ProductCard } from "./ProductCard";

export const ProductList = ({ search, products, addProduct }) => {
  return (
    <>
      <span>Produtos listados: {products.length}</span>
      {search ? <p>Resultados de busca para: {search}</p> : null}

      {products.length > 0 ? (
        <ul>
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
