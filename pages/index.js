import Layout from "../components/layout";
import Banner from "../components/banner";
import Product from "../components/product";
import ProductAdvantage from "../components/pro_advantage";

export default function Index() {
  return (
    <Layout>
      <Banner/>
      <Product/>
      <ProductAdvantage/>
    </Layout>
  );
}
