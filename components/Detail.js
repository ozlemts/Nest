import Button from "@/components/Button";
import Link from "next/link";

function Detail() {
  return (
    <section
      id="details"
      className="w-full flex justify-between my-24 flex-wrap"
    >
      <div className=" w-full">
        <p className="text-4xl font-medium">
          {" "}
          Yenilikçi Fikirler ve İnovasyon Dönüşümü <br /> İçin Kuruma Özel
          Programlar
        </p>
        <div className="flex flex-wrap">
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
        <div className="flex justify-between flex-wrap lg:mr-24">
          <div className="my-4">
            <p className="mb-4 text-sm">
              Kurum dışı yenilikçi fikirlere ulaşmak ve <br /> inovasyon
              stratejisini geliştirmek için girişimcilik <br />
              programları;
            </p>
            <Link href="/nest-by">
              <Button type="btn-primary" shadow size="btn-big">
                Nest-By
              </Button>
            </Link>
          </div>
          <div className=" my-4">
            <p className="mb-4 text-sm">
              Kurum içi inovasyon ve girişimcilik stratejisini <br />{" "}
              geliştirmek, kurum içinden yenilikçi fikirler <br /> üretmek için
              programlar;
            </p>
            <Link href="/nest-in">
              <Button type="btn-secondary" shadow size="btn-big">
                Nest-In
              </Button>
            </Link>
          </div>
          <div className=" my-4">
            <p className="mb-4 text-sm">
              Kurumunuzun inovasyon ve yenilikçilik için etki
              <br /> analizi, proje hazırlama gibi farklı başlıklardaki
              <br /> ihtiyaçlarına yönelik programlar.
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
