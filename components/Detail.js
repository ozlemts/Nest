import Button from "@/components/Button";
import Layout from "@/components/Layout";

function Detail() {
  return (
    <section
      id="details"
      className="w-full flex justify-between my-24 flex-wrap"
    >
      <div className=" w-full md:w-1/2">
        <p className="text-4xl font-medium"> Girişimcilik Programları</p>
        <p className="text-4xl font-medium"> Tasarlıyor ve Uyguluyoruz.</p>
        <ul className="my-4">
          <li>Disiplinler Arası Birlikte Çalışma Prensibi</li>
          <li>Aidiyet Duygusu</li>
          <li>Farklı Ekip ve Yapılarla İş Birliği</li>
          <li>Yalın ve Çevik Düşünce Prensipleri</li>
        </ul>
        <div className="flex justify-between flex-wrap lg:mr-24">
          <div className=" my-4">
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
          <div className=" my-4">
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
      </div>
      <div>
        <div className="hidden md:block w-full">
          <img src="/nest-right.png" />
        </div>
      </div>
    </section>
  );
}

export default Detail;
