import Layout from "@/components/Layout";
import Link from "next/link";
import Button from "@/components/Button";

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
            Girişimcilik dinamizmi ile kurum içinde problem çözme ve iyileştirme
            <br />
            reflekslerini güçlendiren, çok disiplinli ekiplerin beraber daha
            verimli <br />
            çalışmalarını sağlamayı hedefleyen programlardır.
          </p>

          <div className="flex justify-center flex-wrap my-2">
            <ul className="m-6">
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />{" "}
                <span>Problem/süreç iyileştirme</span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />{" "}
                <span>
                  Kurumsal aidiyet ve takımdaşlık <br />
                  duygusunu güçlendirme
                </span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />
                <span>İnovasyona dair yeni stratejiler üretme</span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />
                <span>
                  Takım ve ekipleri canlandırma/yeni <br /> bakış
                  açısı/perspektif getirme
                </span>
              </li>
            </ul>

            <ul className="m-6">
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />{" "}
                <span>Yeni kurumsal süreçlerin tasarlanması</span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />
                <span> Yeni proje kurgulama</span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />{" "}
                <span>Yeni takım oluşturma</span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />{" "}
                <span>Yeni Ürün/süreç tasarlama</span>
              </li>
              <li className="flex text-left">
                <img src="/rounded-ok.svg" className="m-1" />{" "}
                <span>
                  İşe alım sonrasında adaptasyon/entegre
                  <br /> olma (onboarding)
                </span>
              </li>
            </ul>
          </div>

          <p className="text-2xl font-bold mt-12">Nest-In Yaklaşımı</p>
          <div className="my-6 lg:my-12 flex justify-center">
            <img src="/nest-in-yaklasimi.png" className="lg:h-80" />
          </div>
          <p className="text-sm  mx-auto">
            * Programın genel yapısı Sprint (yeni ürün geliştirme) prensibi baz
            alınarak hazırlanır,
            <br /> ama NEST-IN programı Sprint’ten çok daha fazlasıdır.
          </p>
          <p className="text-2xl font-bold mt-12">Program Çıktıları</p>
          <div className="my-6 text-center">
            <Link href="/programs">
              <Button type="btn-primary" shadow>
                {"Programların Tamamı İçin "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NestinPage;
