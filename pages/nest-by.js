import Layout from "@/components/Layout";
import ProgramMiniCard from "@/components/ProgramMiniCard";

function NestbyPage() {
  const samplePrograms = {
    donor: [
      "Yenilikçi teknoloji ve fikirlere erişim",
      "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
      "İtibar, PR ve kanaat önderliği",
    ],
    enterpr: [
      "Fikirden MVP’ye ulaşma",
      "Ürün - pazar validasyonu",
      "Ürünleşme ve ticarileşme",
      "Teknik ve ticari bilgi ve deneyim kazanımı",
    ],
  };
  return (
    <Layout>
      <div className="mt-56 text-center">
        <div className="relative flex justify-center">
          <div className="program-summary border border-gray-200 absolute md:mx-96 flex flex-wrap lg:flex-nowrap  justify-center items-center lg:rounded-xl lg:p-4 shadow-lg  bg-white dark:bg-blue-500 dark:text-blue-200">
            <div className="p-6 w-80">
              <img src="/nest-by.png" className="w-24 dark:hidden" />
              <img
                src="/nest-by-light.png"
                className="w-24 hidden dark:block"
              />
            </div>
            <img src="/line.svg" className="hidden md:block" />
            <p className="text-lg font-bold m-4 ">
              Girişimcilik dinamizmini ve girişimcileri desteklemek isteyen
              kurumlar için özel olarak tasarlanan ve yürütülen programlardır.
            </p>
          </div>
          <img
            src="/nest-by-bg.png"
            className="w-full program-cover object-cover"
          />
        </div>
        <div className="custom-container">
          <p className="text-2xl font-bold mt-4 lg:mt-24">
            Ön Kuluçka Yaklaşımı ile Doğru Girişimcileri ve Fikirleri Buluyoruz
          </p>
          <p className="my-6 w-96 mx-auto">
            Kurumların ihtiyaç ve istekleri kapsamında erken aşama girişimcileri
            bulan, onların fikirlerini olgunlaştırıp ürüne dönüştürmelerine ve
            şirketleşmelerine destek olan programlardır.
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
            <div className="flex justify-center flex-wrap dark:hidden">
              <img src="/ok-1.png" className="p-4 lg:h-60" />
              <img src="/ok-2.png" className="p-4 lg:h-60" />
              <img src="/ok-3.png" className="p-4 lg:h-60" />
            </div>
            <div className="flex justify-center flex-wrap hidden dark:flex">
              <img src="/ok-1-dark.png" className="p-4 lg:h-60" />
              <img src="/ok-2-dark.png" className="p-4 lg:h-60" />
              <img src="/ok-3-dark.png" className="p-4 lg:h-60" />
            </div>
          </div>
          <p className="text-2xl font-bold mt-42 md:mt-12">
            Neden Yapmalısınız?
          </p>
          <div className="flex flex-wrap justify-center mt-12">
            <div className="mx-4">
              {" "}
              <p className="text-xl font-semibold text-red-400">
                Donöre Faydaları
              </p>
              <ul className="my-6 w-96">
                {samplePrograms.donor.map((e, index) => (
                  <li className="flex text-left items-center my-3 mr-1">
                    <img src="/rounded-ok.svg" className="m-1" />
                    <p>{e}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-4">
              <p className="text-xl font-semibold text-red-400">
                Girişimciye Faydaları
              </p>

              <div>
                <ul className="my-6 w-96">
                  {samplePrograms.enterpr.map((e, index) => (
                    <li className="flex text-left items-center my-3 mr-1">
                      <img src="/rounded-ok.svg" className="m-1" />
                      <p>{e}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-2xl font-bold mt-12">
            Nest-By Modül ve Metodolojileri
          </p>
          <p className="mt-6 mx-auto">
            Modül ve metodolojiler hem ön kuluçka programında <br />
            kullanılmakta hem de kurum ihtiyacına göre modül olarak da <br />
            gerçekleştirilebilmektedir.
          </p>
          <div className="mt-6 lg:mt-12 flex justify-center pt-4 lg:mx-40">
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
