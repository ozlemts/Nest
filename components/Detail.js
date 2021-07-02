import Button from "@/components/Button";
import Link from "next/link";

function Detail() {
  return (
    <section
      id="details"
      className="w-full flex justify-between my-24 flex-wrap"
    >
      <div className="w-full text-center">
        <p className="text-4xl font-medium mb-6">
          Yenilikçi Fikirler ve İnovasyon Dönüşümü <br /> İçin Kuruma Özel
          Programlar
        </p>
        <div className="flex flex-wrap hidden">
          <ul className="my-6">
            <li className="flex items-center">
              <img src="/rounded-ok.svg" className="m-1" /> Disiplinler Arası
              Birlikte Çalışma Prensibi
            </li>
            <li className="flex items-center">
              <img src="/rounded-ok.svg" className="m-1" /> Aidiyet Duygusu
            </li>
          </ul>
          <ul className="my-6 ml-4">
            <li className="flex items-center">
              <img src="/rounded-ok.svg" className="m-1" /> Farklı Ekip ve
              Yapılarla İş Birliği
            </li>
            <li className="flex items-center">
              <img src="/rounded-ok.svg" className="m-1" /> Yalın ve Çevik
              Düşünce Prensipleri
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="my-4">
            <p className="mb-4">
              Kurum dışı yenilikçi fikirlere <br />
              ulaşmak ve inovasyon stratejisini <br />
              geliştirmek için girişimcilik <br />
              programları;
            </p>
            <Link href="/nest-by">
              <Button type="btn-primary" shadow size="btn-big">
                Nest-By
              </Button>
            </Link>
          </div>
          <div className=" my-4">
            <p className="mb-4 ">
              Kurum içi inovasyon ve girişimcilik
              <br />
              stratejisini geliştirmek, kurum
              <br />
              içinden yenilikçi fikirler üretmek
              <br />
              için programlar;
            </p>
            <Link href="/nest-in">
              <Button type="btn-secondary" shadow size="btn-big">
                Nest-In
              </Button>
            </Link>
          </div>
          <div className=" my-4">
            <p className="mb-4 ">
              Kurumunuzun inovasyon ve yenilikçilik
              <br />
              için etki analizi, proje hazırlama
              <br />
              gibi farklı başlıklardaki ihtiyaçlarına
              <br /> yönelik programlar.
            </p>
            <Link href="/nest-in">
              <Button type="btn-ternary" shadow size="btn-big">
                Diğer Programlar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
