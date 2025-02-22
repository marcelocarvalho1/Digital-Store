import "./SectionOfert.css";
import { ButtonRosa } from "../Buttons/index";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import sapato from "../../../public/sapato.png";
import fundo_sapato from "../../../public/fundo_sapato.png";

export function OfertSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container-ofert">
      <div className="image-ofert">
        <img src={sapato} alt="Sapato" className="sapato" />
        <img src={fundo_sapato} alt="Fundo Sapato" className="fundo-sapato" />
      </div>
      <div className="conteudo-ofert">
        <span className="title-ofert">Oferta especial</span>
        <h2>Air Jordan edição de colecionador</h2>
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <NavLink to="/viewProduct">
          <ButtonRosa />
        </NavLink>
      </div>
    </div>
  );
}
