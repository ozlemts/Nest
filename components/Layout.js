import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

function Layout({ children }) {
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          />
        </noscript>
      </Head>
      <div className="flex flex-col justify-between w-full bg-white dark:bg-blue-600 dark:text-blue-100">
        <div className="w-full background-img">
          <div className="fixed w-full z-50">
            <NavBar />
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
