import { Carousel } from "../../components/Caroussel"
import { CardSection } from "../../components/CardSection"
// import { Section } from "../../Components/Section/Section"
// import { ProductCard } from "../../Components/ProductCard/ProductCard"
// import { SectionOfert } from "../../Components/SectionOfert/SectionOfert"
import Layout from "../Layout";


export function HomePage() {
    return (
        <>
            <Layout>
                <Carousel />
                <CardSection/>
                {/* <Section />
                <ProductCard />
                <SectionOfert />  */}
            </Layout>
        </>
    )
}