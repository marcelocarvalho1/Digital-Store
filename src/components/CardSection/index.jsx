import "./CardSection.css";
import { ButtonCard } from "../Buttons/index";

const collections = [
  { image: "collection1.png", offer: "30% OFF", title: "Novo Drop Supreme" },
  { image: "collection2.png", offer: "30% OFF", title: "Coleção Adidas" },
  { image: "collection3.png", offer: "30% OFF", title: "Novo Beat Bass" },
];

export function CardSection() {
  return (
    <div className="color-bg">
      <section className="containerSectionCard">
        <div className="container-title-card">Coleções em destaque</div>
        <div className="container-collection">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="collection"
              style={{ backgroundImage: `url(/public/${collection.image})` }}
            >
              <div className="oferta">{collection.offer}</div>
              <h3>{collection.title}</h3>
              <ButtonCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
