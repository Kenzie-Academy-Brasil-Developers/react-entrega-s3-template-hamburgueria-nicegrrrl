import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setSearch, cleanFilter, setIsOpen, cartList }) => {
  const [value, setValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div>
          <button onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={21} />
            <span>{cartList.length}</span>
          </button>

          <form onSubmit={submit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <button type="submit">
              <MdSearch size={21} />
            </button>
          </form>
          <button onClick={cleanFilter}>Limpar busca</button>
        </div>
      </div>
    </header>
  );
};
