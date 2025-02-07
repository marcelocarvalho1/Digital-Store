import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Produtos" },
  { path: "", label: "Categorias" },
  { path: "", label: "Meus Pedidos" },
];

export function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
