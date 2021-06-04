import Logo from "@/components/Logo";
import Link from "next/link";
import { useTheme } from "next-themes";

const menuElements = [
  { name: "Programlar", targetUrl: "/programs" },
  { name: "Nest-By", targetUrl: "/nest-by" },
  { name: "Nest-In", targetUrl: "/nest-in" },
  { name: "Blog", targetUrl: "https://blog.viveka.com.tr/" },
  { name: "İletişim", targetUrl: "/contact" },
];

function NavBar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap py-6 dark:bg-blue-600 bg-white shadow-sm px-3 md:px-12 lg:px-36">
      <Logo color={theme === "light" ? "#222147" : "#A7A6D6"} />
      <div className="grid justify-start items-center grid-flow-col gap-4 font-semibold dark:text-blue-200 ">
        {menuElements.map((e, index) => (
          <Link
            className="text-blue-300  hover:text-red-600 "
            href={e.targetUrl}
            key={index}
          >
            {e.name}
          </Link>
        ))}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 rounded dark:bg-blue-500"
          onClick={() => toggleTheme()}
        >
          <img src={theme === "light" ? "/moon.svg" : "/sun.svg"} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
