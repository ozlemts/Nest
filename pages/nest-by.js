import Layout from "@/components/Layout";
import ProgramMiniCard from "@/components/ProgramMiniCard";

function NestbyPage() {
  const samplePrograms = [
    {
      id: "cococola",
      logo: "/ref/dark-cococola.png",
      name: "Cococola",
      status: "Tamamlandı",
      duration: "2019-2020",
      advantages: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
      ],
    },
    {
      id: "cococola",
      logo: "/ref/dark-cococola.png",
      name: "Cococola 2",
      status: "Tamamlandı",
      duration: "2019-2020",
      advantages: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
      ],
    },
    {
      id: "cococola",
      logo: "/ref/dark-cococola.png",
      name: "Cococola 3",
      status: "Tamamlandı",
      duration: "2019-2020",
      advantages: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
      ],
    },
  ];
  return (
    <Layout>
      <div className="mt-56">
        <div className="relative flex justify-center">
          <div className="program-summary border border-gray-200 absolute lg:mx-24 flex justify-center items-center flex-wrap lg:rounded-xl lg:p-4 shadow-lg  bg-white dark:bg-blue-500 dark:text-blue-200">
            <div className="lg:max-w-md lg:mx-8">
              <div className="h-16 m-4">
                <img src="/nest-by.png" className="w-24 dark:hidden" />
                <img
                  src="/nest-by-light.png"
                  className="w-24 hidden dark:block"
                />
              </div>
            </div>
            <img src="/line.svg" className="hidden md:block" />
            <p className="text-lg font-bold m-4">
              Girişimcilik dinamizmini ve girişimcileri
              <br /> desteklemek isteyen kurumlar için özel
              <br /> olarak tasarlanan ve yürütülen
              <br /> programlardır.
            </p>
          </div>
          <img
            src="/nest-by-bg.png"
            className="w-full program-cover object-cover"
          />
        </div>
        <div className="custom-container text-center">
          <p className="text-2xl font-bold mt-4 lg:mt-12">
            Ön Kuluçka Yaklaşımı
          </p>
          <p className="mt-6">
            Erken aşama girişimcilerin fikirlerini olgunlaştırıp ürüne
            <br /> dönüştürmelerine ve şirketleşmelerine destek olan
            programlardır.
          </p>
          <div className="my-6 lg:my-12 flex justify-center">
            <img src="/on-kulucka.png" className="lg:h-96 dark:hidden" />
            <img
              src="/on-kulucka-dark.png"
              className="lg:h-96 hidden dark:block"
            />
          </div>
          <p className="text-2xl font-bold mt-16">Ön Kuluçka Programı</p>
          <div className="my-6 lg:my-12 flex justify-center">
            <img
              src="/on-kulucka-programi.png"
              className="lg:h-80 dark:hidden"
            />
            <img
              src="/on-kulucka-programi-dark.png"
              className="lg:h-80 hidden dark:block"
            />
          </div>
          <p className="text-2xl font-bold mt-16">Neden Yapmalısınız?</p>
          <div className="flex overflow-x-auto">
            {samplePrograms.map((p, index) => (
              <ProgramMiniCard program={p} />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <img src="three-dot.svg" />
          </div>
          <p className="text-2xl font-bold mt-12">
            Nest-By Modül ve Metodolojileri
          </p>
          <p className="mt-6 mx-auto">
            Modül ve metodolojiler hem ön kuluçka programında <br />
            kullanılmakta hem de kurum ihtiyacına göre modül olarak da <br />
            gerçekleştirilebilmektedir.
          </p>
          <div className="my-6 lg:my-12 flex justify-center py-4 lg:mx-40">
            <img src="/nest-by-circle.png" className="lg:h-80 dark:hidden" />
            <img
              src="/nest-by-circle-dark.png"
              className="lg:h-80 hidden dark:block"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NestbyPage;
