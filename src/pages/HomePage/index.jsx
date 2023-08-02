import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = () => {
  const localCartList = localStorage.getItem("@kenzieBurger: cartList");

  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const productsResult = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  const products = search ? productsResult : productList;

  const cleanFilter = () => {
    setSearch("");
  };

  // 👌🏻useEffect montagem - carrega os produtos da API e joga em productList
  // 👌🏻useEffect atualização - salva os produtos no localStorage (carregar no estado)
  // 👌🏻adição, exclusão, e exclusão geral do carrinho
  // 👌🏻renderizações condições e o estado para exibir ou não o carrinho
  // 👌🏻filtro de busca
  // estilizar tudo com sass de forma responsiva

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@kenzieBurger: cartList", JSON.stringify(cartList));
  }, [cartList]);

  const addProduct = (product) => {
    if (!cartList.some((cartItem) => cartItem.id === product.id)) {
      setCartList([...cartList, product]);
    } else {
      alert("Item já adicionado!");
    }
  };

  const removeProduct = (productId) => {
    const filteredProducts = cartList.filter(
      (product) => product.id !== productId
    );
    setCartList(filteredProducts);
  };

  const removeAllProducts = () => {
    setCartList([]);
  };

  return (
    <>
      <Header
        setSearch={setSearch}
        cleanFilter={cleanFilter}
        setIsOpen={setIsOpen}
        cartList={cartList}
      />
      <main>
        <ProductList
          search={search}
          products={products}
          addProduct={addProduct}
        />
        {isOpen ? (
          <CartModal
            cartList={cartList}
            removeProduct={removeProduct}
            removeAllProducts={removeAllProducts}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </main>
    </>
  );
};
