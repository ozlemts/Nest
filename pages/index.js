import Head from "next/head";
import Link from "next/link";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Detail from "@/components/Detail";
import Programs from "@/components/Programs";
import Referances from "@/components/Referances";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

function Home() {
  return (
    <div>
      <div id="homepage">
        <Layout>
          <Header />
          <div className="lg:p-12 lg:mx-24 flex justify-center flex-wrap lg:rounded-xl lg:p-6 shadow-lg lg:pb-8 bg-white dark:bg-blue-500 dark:text-blue-200">
            <div className="lg:max-w-md lg:mx-8 my-4">
              <p className="mb-4">
                Girişimcilik dinamizmini ve <br />
                girişimcileri desteklemek isteyen
                <br /> kurumlar için;
              </p>
              <Link href="/nest-by">
                <Button type="btn-primary" shadow>
                  Nest-By
                </Button>
              </Link>
            </div>
            <img src="/line.svg" className="hidden md:block" />
            <div className="lg:max-w-md lg:mx-8 my-4">
              <p className="mb-4">
                Girişimcilik dinamizminin kendi
                <br /> kültürüne entegre etmek isteyen
                <br /> kurumlar için;
              </p>
              <Link href="/nest-in">
                <Button type="btn-secondary" shadow>
                  {" "}
                  Nest-In
                </Button>
              </Link>
            </div>
          </div>
          <Detail />
          <Programs />
          <Referances />
          <Testimonials />
          <Blog />
        </Layout>
      </div>
    </div>
  );
}

export default Home;
