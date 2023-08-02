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
        <div className={styles.headerContent}>
          <div className={styles.logoAndCart}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            {/* <div> */}
            <button
              className={styles.cartButton}
              onClick={() => setIsOpen(true)}
            >
              <MdShoppingCart className={styles.cartIcon} size={25} />
              <span className={`${styles.cartSpan} bodyTypography`}>
                {cartList.length}
              </span>
            </button>
          </div>
          <div className={styles.formAndButton}>
            <form className={styles.form} onSubmit={submit}>
              <input
                className={styles.input}
                type="text"
                value={value}
                placeholder="Digitar Pesquisa"
                onChange={(e) => setValue(e.target.value)}
                required
              />
              <button type="submit" className="buttonMedium">
                <MdSearch size={21} />
              </button>
            </form>
          </div>
          {/* <button onClick={cleanFilter}>Limpar busca</button> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};
