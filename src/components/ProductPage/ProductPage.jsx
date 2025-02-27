import "./ProductPage.css";
import { Link } from "react-router-dom";
import ArrowBottom from "../../assets/arrow-bottom.svg";
import TenisCard from "../../assets/tenisCard.svg";

const products = Array(15).fill({
  nome: "Tênis",
  descricao: "K-Swiss V8 - Masculino",
  descPorc: "30% OFF",
  preco: "$200",
  desconto: "$100",
  image: TenisCard,
});

export function ProductPage() {
  return (
    <div className="bg-color">
      <section className="prodCard">
        <div className="first">
          <h2>Resultados para "Tênis" - {products.length} produtos</h2>
          <div className="ordenar-por">
            <span>Ordenar por:</span>
            <select id="ordenacao" name="ordenacao">
              <option value="mais-relevantes">Mais relevantes</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>
        </div>
        <div className="content">
          <aside className="filter">
            <p>Filtrar por</p>
            <hr />
            <p>Marca</p>
            <form>
              {["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"].map(
                (brand, index) => (
                  <div key={index}>
                    <input type="checkbox" defaultChecked={brand === "Adidas" || brand === "K-Swiss"} />
                    <label>{brand}</label>
                  </div>
                )
              )}
            </form>
            <p>Categoria</p>
            <form>
              {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map(
                (category, index) => (
                  <div key={index}>
                    <input type="checkbox" defaultChecked={category === "Esporte e lazer"} />
                    <label>{category}</label>
                  </div>
                )
              )}
            </form>
            <p>Gênero</p>
            <form>
              {["Masculino", "Feminino", "Unissex"].map((gender, index) => (
                <div key={index}>
                  <input type="checkbox" defaultChecked={gender === "Masculino" || gender === "Feminino"} />
                  <label>{gender}</label>
                </div>
              ))}
            </form>
            <p>Estado</p>
            <div>
              <input type="radio" name="estado" defaultChecked />
              <label>Novo</label>
            </div>
            <div>
              <input type="radio" name="estado" />
              <label>Usado</label>
            </div>
          </aside>
          <div className="second">
            {products.map((produto, index) => (
              <Link to="/viewProduct" key={index} className="product-item">
                <div>
                  <img src={produto.image} alt={produto.nome} />
                  <p className="descPorc">{produto.descPorc}</p>
                </div>
                <p>{produto.nome}</p>
                {produto.descricao}
                <div className="prices">
                  <p className="price">{produto.preco}</p>
                  <p className="priceDisc">{produto.desconto}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
