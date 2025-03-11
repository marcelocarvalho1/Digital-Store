import React from "react";
import { DescProduct } from "../../components/DescProduct";
import { ProductCard } from "../../components/ProductCard";
import Layout from "../Layout";

export function ProductViewPage() {
  return (
    <>
      <Layout>
        <DescProduct />
        <ProductCard quantidadeProdutos={4} />
      </Layout>
    </>
  );
}
