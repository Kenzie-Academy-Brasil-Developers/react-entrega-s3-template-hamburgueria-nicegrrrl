import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};
