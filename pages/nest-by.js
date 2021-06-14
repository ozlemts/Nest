import Layout from "@/components/Layout";

function NestbyPage() {
  return (
    <Layout>
      <div className="mt-56">
        <div className="relative flex justify-center">
          <div className="program-summary border border-gray-200 absolute lg:p-6 lg:mx-24 flex justify-center items-center flex-wrap lg:rounded-xl lg:p-4 shadow-lg  bg-white dark:bg-blue-500 dark:text-blue-200">
            <div className="lg:max-w-md lg:mx-8">
              <img src="nest-by.png" className="h-16 m-2"/>
            </div>
            <img src="/line.svg" className="hidden md:block" />
            <p className="text-lg font-bold m-2" >Girişimcilik dinamizmini ve girişimcileri<br/> desteklemek isteyen kurumlar için özel<br/> olarak tasarlanan ve yürütülen<br/> programlardır.</p>
          </div>
          <img
            src="/nest-by-bg.png"
            className="w-full program-cover object-cover"
          />
        </div>
        <div className="custom-container text-center">
          <p className="text-2xl font-bold mt-12">Ön Kuluçka Yaklaşımı</p>
          <p className="mt-6">Erken aşama girişimcilerin fikirlerini olgunlaştırıp ürüne<br/> dönüştürmelerine ve şirketleşmelerine destek olan programlardır.</p>
          <p className="text-2xl font-bold mt-12">Ön Kuluçka Program Çıktıları</p>
          <p className="mt-6">Programın Donöre Faydaları.</p>
          <p className="">Programın Girişimciye Faydaları.</p>
          <p className="text-2xl font-bold mt-12">Nest-By Modül ve Metodolojileri</p>
          <p className="mt-6">Modül ve metodolojiler hem ön kuluçka programında<br/> kullanılmakta hem de kurum ihtiyacına göre modül olarak da gerçekleştirilebilmektedir.</p>
        </div>
      </div>
    </Layout>
  );
}

export default NestbyPage;
