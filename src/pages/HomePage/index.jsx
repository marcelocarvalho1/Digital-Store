import { Carousel } from "../../components/Caroussel"
// import { SectionCard } from "../../Components/SectionCard/SectionCard"
// import { Section } from "../../Components/Section/Section"
// import { ProductCard } from "../../Components/ProductCard/ProductCard"
// import { SectionOfert } from "../../Components/SectionOfert/SectionOfert"
import Layout from "../Layout";


export function HomePage() {
    return (
        <>
            <Layout>
                <Carousel />
                {/* <SectionCard />
                <Section />
                <ProductCard />
                <SectionOfert />  */}
            </Layout>
        </>
    )
}