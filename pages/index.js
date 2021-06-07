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
      <Head>
        <title>Nest | Where Ideas & People Grow</title>
        <meta
          name="description"
          content="Nest özünde girişimcilik dinamizmini destekleyen ve bundan farklı olarak, bu dinamizmi kendi şirket kültürüne entegre etmek isteyen kurum ve şirketlere özel programlar tasarlayan, bu programları yürüten bir yapıda kurulmuştur. "
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VivekaInc" />
        <meta name="twitter:creator" content="twitter_creator" />
        <meta name="twitter:title" content="NestIn | NestBy" />
        <meta
          name="twitter:description"
          content="Nest özünde girişimcilik dinamizmini destekleyen"
        />
        <meta name="twitter:image" content="/seo-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
