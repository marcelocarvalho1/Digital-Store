import { Carousel } from "../../components/Caroussel"
import { CardSection } from "../../components/CardSection"
import { Section } from "../../components/Section"
import { ProductCard } from "../../components/ProductCard"
// import { SectionOfert } from "../../Components/SectionOfert/SectionOfert"
import Layout from "../Layout";


export function HomePage() {
    return (
        <>
            <Layout>
                <Carousel />
                <CardSection/>
                <Section />
                <ProductCard />
                {/* <SectionOfert />  */}
            </Layout>
        </>
    )
}