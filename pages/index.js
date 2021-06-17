import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Detail from "@/components/Detail";
import Programs from "@/components/Programs";
import References from "@/components/References";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

function Home() {
  return (
    <div>
      <div id="homepage">
        <Layout>
          <div className="custom-container">
            <Header />
            <Detail />
            <Programs />
            <References />
            <Testimonials />
            <Blog />
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
