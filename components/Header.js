function Header() {
  return (
    <section
      id="header"
      className="w-full flex justify-between my-12 flex-wrap"
    >
      <div className=" w-full md:w-1/2">
        <p className="text-6xl font-medium dark:text-blue-100"> Girişimcilik</p>
        <p className="text-6xl font-bold dark:text-blue-100"> Dinamizmi!</p>
        <p className=" my-6 font-semibold text-gray-700 max-w-lg dark:text-blue-200">
          Nest özünde girişimcilik dinamizmini destekleyen ve bundan farklı
          olarak, bu dinamizmi kendi şirket kültürüne entegre etmek isteyen
          kurum ve şirketlere özel programlar tasarlayan, bu programları yürüten
          bir yapıda kurulmuştur.
        </p>
      </div>
      <div>
        <div className="hidden md:block w-full">
          <img src="/right-1.svg" />
        </div>
      </div>
    </section>
  );
}

export default Header;
