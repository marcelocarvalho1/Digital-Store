import { Carousel } from "../../components/Caroussel";
import { CardSection } from "../../components/CardSection";
import { Section } from "../../components/Section";
import { ProductCard } from "../../components/ProductCard";
import { OfertSection } from "../../components/OfertSection";
import Layout from "../Layout";

export function HomePage() {
  return (
    <>
      <Layout>
        <Carousel />
        <CardSection />
        <Section />
        <ProductCard />
        <OfertSection />
      </Layout>
    </>
  );
}
