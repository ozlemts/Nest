import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Detail from "@/components/Detail";
import Programs from "@/components/Programs";
import Referances from "@/components/Referances";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import LogoSlider from "@/components/LogoSlider";

function Home() {
  return (
    <div>
      <div id="homepage">
        <Layout>
          <div className="custom-container">
            <Header />
            <Detail />
            <Programs />
            <Referances />
            <Testimonials />
            <LogoSlider />
            <Blog />
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
