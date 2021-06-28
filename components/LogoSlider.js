function LogoSlider() {
  const references = [
    {
      light: "light-bilkent-cyberpark.png",
      dark: "dark-bilkent-cyberpark.png",
    },
    { light: "light-odtu.png", dark: "dark-odtu.png" },
    { light: "light-kworks.png", dark: "dark-kworks.png" },
    { light: "light-imece.png", dark: "dark-imece.png" },
    { light: "light-iyte.png", dark: "dark-iyte.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-zorlu.png", dark: "dark-zorlu.png" },
    { light: "light-kizilay.png", dark: "dark-kizilay.png" },
    { light: "light-ktu.png", dark: "dark-ktu.png" },
    { light: "light-iyte.png", dark: "dark-iyte.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-imece.png", dark: "dark-imece.png" },
    { light: "light-iyte.png", dark: "dark-iyte.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-imece.png", dark: "dark-imece.png" },
  ];
  const secondlineReferences = [
    { light: "light-iyte.png", dark: "dark-iyte.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-zorlu.png", dark: "dark-zorlu.png" },
    { light: "light-iyte.png", dark: "dark-iyte.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
    { light: "light-imece.png", dark: "dark-imece.png" },
    {
      light: "light-bilkent-cyberpark.png",
      dark: "dark-bilkent-cyberpark.png",
    },
    { light: "light-odtu.png", dark: "dark-odtu.png" },
    { light: "light-kworks.png", dark: "dark-kworks.png" },
    { light: "light-imece.png", dark: "dark-imece.png" },
    { light: "light-iyte.png", dark: "dark-iyte.png" },
    { light: "light-cococola.png", dark: "dark-cococola.png" },
    { light: "light-habitat.png", dark: "dark-habitat.png" },
  ];
  return (
    <div className="my-8 py-6">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="logo-slider-wrapper inline-block whitespace-nowrap overflow-hidden">
          <div className="inline-block">
            {references.map((e, index) => (
              <div className="logo-svg hover:opacity-90">
                <img src={`ref/${e.dark}`} className="dark:hidden" />
                <img src={`ref/${e.light}`} className="hidden dark:block" />
              </div>
            ))}
          </div>
          <div className="inline-block">
            {references.map((e, index) => (
              <div className="logo-svg hover:opacity-90">
                <img src={`ref/${e.dark}`} className="dark:hidden" />
                <img src={`ref/${e.light}`} className="hidden dark:block" />
              </div>
            ))}
          </div>
        </div>
        <div className="my-8"></div>
        <div className="logo-slider-wrapper delay-500 inline-block whitespace-nowrap overflow-hidden">
          <div className="inline-block">
            {secondlineReferences.map((e, index) => (
              <div className="logo-svg hover:opacity-90">
                <img src={`ref/${e.dark}`} className="dark:hidden" />
                <img src={`ref/${e.light}`} className="hidden dark:block" />
              </div>
            ))}
          </div>
          <div className="inline-block">
            {secondlineReferences.map((e, index) => (
              <div className="logo-svg hover:opacity-90">
                <img src={`ref/${e.dark}`} className="dark:hidden" />
                <img src={`ref/${e.light}`} className="hidden dark:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
