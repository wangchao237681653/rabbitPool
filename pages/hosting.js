import Layout from "../components/layout";
import PowBanner from "../components/powerBanner";
import HostingFall from "../components/hostingFall";
import MacView from "../components/macView";

export default function Index() {
  return (
    <Layout>
      <PowBanner/>
      <HostingFall/>
      <MacView/>
    </Layout>
  );
}
