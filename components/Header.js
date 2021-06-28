function Header() {
  return (
    <section id="header">
      <div className="w-full flex justify-between  items-center lg:my-24 my-12 flex-wrap">
        <div>
          <p className="text-4xl lg:text-6xl font-medium dark:text-blue-100">
            {"Fikirleri"}
          </p>
          <p className="text-4xl lg:text-6xl font-bold dark:text-blue-100">
            {"Büyütüyoruz!"}
          </p>
          <p className=" my-6 font-semibold text-gray-700 max-w-lg dark:text-blue-200">
            Kurumların inovasyona erişimi için yenilikçi iş fikirlerini hem iç
            hem dış ekosistemle geliştirmeleri için programlar tasarlıyor ve
            yürütüyoruz.
          </p>
        </div>
        <div>
          <div className="hidden md:block p-4">
            <img src="/right-1.svg" />
          </div>
        </div>
      </div>
      <div className="lg:p-12 lg:mx-24  lg:rounded-xl lg:p-6 shadow-lg lg:pb-8 bg-white dark:bg-blue-500 dark:text-blue-200 text-center">
        <p className="text-xl font-bold">Ne Sağlar?</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left my-6">
          <div className="flex items-start lg:justify-center lg:items-center">
            <img src="/header-1.svg" className="mr-4" />
            <p>
              Girişimcilik <br />
              Bakış Açısı
            </p>
          </div>
          <div className="flex items-start lg:justify-center lg:items-center">
            <img src="/header-2.svg" className="mr-4" />
            <p>
              İnnovasyon <br />
              Stratejisi
            </p>
          </div>
          <div className="flex items-start lg:justify-center lg:items-center">
            <img src="/header-3.svg" className="mr-4" />
            <p>
              Yaratıcı ve Yenilikçi
              <br /> Düşünme
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
