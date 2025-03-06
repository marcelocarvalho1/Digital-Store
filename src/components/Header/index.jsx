import "./Header.css";
import cartIcon from "../../assets/cart-icon.svg";
import Search from "../../assets/Search.svg";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="cabelhaco">
        <Logo />
        <div className="search-container">
          <input type="text" placeholder="Pesquisar produto..." />
          <img className="search-icon" src={Search} alt="Ícone de pesquisa" />
        </div>
        <div>
          <Link to="/register">Cadastre-se</Link>
          <button>Entrar</button>
          <img className="cart" src={cartIcon} alt="Carrinho de Compras" />
        </div>
      </div>
      <NavBar />
    </header>
  );
}
