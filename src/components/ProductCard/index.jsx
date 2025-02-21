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
    <div className="color-bg">
      <section className="prodCard">
        <div className="first">
          <h2>Produtos em alta</h2>
          <Link to="/products">
            Ver todos <img src={ArrowRight} alt="" />
          </Link>
        </div>
        <div className="second">
          {produtosParaMostrar.map((produto, index) => (
            <div key={index} className="product-item">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
