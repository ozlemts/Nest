import Head from "next/head";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Detail from "@/components/Detail";
import Programs from "@/components/Programs";

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
      <Layout>
        <Header />
        <div className="lg:m-12 flex justify-center flex-wrap lg:rounded-lg lg:p-6 lg:pb-8">
          <div className="lg:max-w-md lg:mx-8 my-4">
            <p className="mb-4">
              Girişimcilik dinamizmini ve <br />
              girişimcileri desteklemek isteyen
              <br /> kurumlar için;
            </p>
            <Button type="btn-primary" shadow>
              {" "}
              Nest-By
            </Button>
          </div>
          <img src="/line.svg" className="hidden md:block" />
          <div className="lg:max-w-md lg:mx-8 my-4">
            <p className="mb-4">
              Girişimcilik dinamizminin kendi
              <br /> kültürüne entegre etmek isteyen
              <br /> kurumlar için;
            </p>
            <Button type="btn-secondary" shadow>
              {" "}
              Nest-In
            </Button>
          </div>
        </div>
        <Detail />
        <Programs />
        <p>İş Birlikçileri</p>
        <p>Paydaş Görüşleri</p>
        <p>Blog</p>
        <p>Blog</p>
      </Layout>
    </div>
  );
}

export default Home;
