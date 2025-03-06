import "./ProductCard.css";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/right-arrow.svg";
import TenisCard from "../../assets/tenisCard.svg";

const products = [
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    descPorc: "30% OFF",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    descPorc: "30% OFF",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    preco: "$200",
    desconto: "$100",
    image: TenisCard,
  },
];

export function ProductCard({ quantidadeProdutos }) {
  const produtosParaMostrar = products.slice(0, quantidadeProdutos);

  return (
    <div className="prod-card-bg">
      <section className="prod-card">
        <div className="prod-card-header">
          <h2>Produtos em alta</h2>
          <Link to="/products">
            Ver todos <img src={ArrowRight} alt="" />
          </Link>
        </div>
        <div className="prod-card-grid">
          {produtosParaMostrar.map((produto, index) => (
            <div key={index} className="prod-card-item">
              <div className="prod-card-image">
                <img src={produto.image} alt={produto.nome} />
                {produto.descPorc && <p className="prod-card-descPorc">{produto.descPorc}</p>}
              </div>
              <p className="prod-card-name">{produto.nome}</p>
              <p className="prod-card-desc">{produto.descricao}</p>
              <div className="prod-card-prices">
                <p className="prod-card-price">{produto.preco}</p>
                <p className="prod-card-priceDisc">{produto.desconto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
