import Logo from "@/components/Logo";
import { useState } from "react";
import { useTheme } from "next-themes";

const menuElements = [
  { name: "Programlar", targetUrl: "/" },
  { name: "Nest-By", targetUrl: "/" },
  { name: "Nest-In", targetUrl: "/create" },
  { name: "Blog", targetUrl: "/startups" },
  { name: "İletişim", targetUrl: "https://blog.viveka.com.tr/" },
];

function NavBar() {
  const { theme, setTheme } = useTheme();
  const [logoColor, setLogoColor] = useState("#A7A6D6");
  const [modeIcon, setModeIcon] = useState("/moon.svg");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setLogoColor(theme === "light" ? "#A7A6D6" : "#222147");
    setModeIcon(theme === "dark" ? "/moon.svg" : "/sun.svg");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap py-6 dark:bg-blue-600 bg-white shadow-sm px-3 md:px-12 lg:px-36">
      <Logo color={logoColor} />
      <div className="grid justify-start items-center grid-flow-col gap-4 font-semibold">
        {menuElements.map((e) => (
          <a
            className="text-gray-700 dark:text-blue-200 hover:text-red-600"
            target={e.targetUrl}
          >
            {e.name}
          </a>
        ))}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 rounded dark:bg-blue-500"
          onClick={() => toggleTheme()}
        >
          <img src={modeIcon} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
