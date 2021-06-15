import Link from "next/link";
import Button from "@/components/Button";

function Header() {
  return (
    <section id="header">
      <div className="w-full flex justify-between my-18 flex-wrap">
        <div className=" w-full md:w-1/2">
          <p className="text-6xl font-medium dark:text-blue-100">
            {"Fikirleri"}
          </p>
          <p className="text-6xl font-bold dark:text-blue-100"> Büyütüyoruz!</p>
          <p className=" my-6 font-semibold text-gray-700 max-w-lg dark:text-blue-200">
            Kurumların inovasyona erişimi için yenilikçi iş fikirlerini hem iç
            hem dış ekosistemle geliştirmeleri için programlar tasarlıyor ve
            yürütüyoruz.
          </p>
        </div>
        <div>
          <div className="hidden md:block w-full">
            <img src="/right-1.svg" />
          </div>
        </div>
      </div>
      <div className="lg:p-12 lg:mx-24 flex justify-center flex-wrap lg:rounded-xl lg:p-6 shadow-lg lg:pb-8 bg-white dark:bg-blue-500 dark:text-blue-200">
        <div className="lg:max-w-md lg:mx-8 my-4">
          <p className="mb-4">
            Girişimcilik dinamizmini ve <br />
            girişimcileri desteklemek isteyen
            <br /> kurumlar için;
          </p>
          <Link href="/nest-by">
            <Button type="btn-primary" shadow>
              Nest-By
            </Button>
          </Link>
        </div>
        <img src="/line.svg" className="hidden md:block" />
        <div className="lg:max-w-md lg:mx-8 my-4">
          <p className="mb-4">
            Girişimcilik dinamizminin kendi
            <br /> kültürüne entegre etmek isteyen
            <br /> kurumlar için;
          </p>
          <Link href="/nest-in">
            <Button type="btn-secondary" shadow>
              {" "}
              Nest-In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
