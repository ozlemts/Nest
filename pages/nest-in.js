import Layout from "@/components/Layout";

function NestinPage() {
  return (
    <Layout>
      <div className="mt-56">
        <div className="relative flex justify-center">
          <div className="program-summary border border-gray-200 absolute lg:mx-24 flex justify-center items-center flex-wrap lg:rounded-xl lg:p-4 shadow-lg  bg-white dark:bg-blue-500 dark:text-blue-200">
            <div className="lg:max-w-md lg:mx-8">
              <img src="nest-in.png" className="h-16 m-4" />
            </div>
            <img src="/line.svg" className="hidden md:block" />
            <p className="text-lg font-bold m-4">
              Girişimcilik dinamizmini kurum içerisine entegre etmek
              <br />
              ve bu prensipleri uygulamak isteyen kurumlar <br />
              için özel olarak tasarlanan ve yürütülen programlardır.
            </p>
          </div>
          <img
            src="/nest-by-bg.png"
            className="w-full program-cover object-cover"
          />
        </div>
        <div className="custom-container text-center">
          <p className="text-2xl font-bold mt-12">Programın Çözüm Alanları</p>
          <p className="mt-6">
            Girişimcilik dinamizmi ile kurum içinde problem çözme ve iyileştirme{" "}
            <br />
            reflekslerini güçlendiren, çok disiplinli ekiplerin beraber daha
            verimli <br />
            çalışmalarını sağlamayı hedefleyen programlardır.
          </p>
          <p className="text-2xl font-bold mt-12">Programın Çıktıları</p>
        </div>
      </div>
    </Layout>
  );
}

export default NestinPage;
