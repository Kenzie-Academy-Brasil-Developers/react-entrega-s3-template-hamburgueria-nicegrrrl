import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ setSearch, cleanFilter }) => {
  const [value, setValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <header>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button>
          <MdShoppingCart size={21} />
          <span>0</span>
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
    </header>
  );
};
