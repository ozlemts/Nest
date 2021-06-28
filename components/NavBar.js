import Logo from "@/components/Logo";
import Link from "next/link";
import { useTheme } from "next-themes";
import Menu from "@/components/Menu";

const menuElements = [
  { name: "Programlar", targetUrl: "/programs" },
  { name: "Nest-By", targetUrl: "/nest-by" },
  { name: "Nest-In", targetUrl: "/nest-in" },
  { name: "Blog", targetUrl: "https://blog.viveka.com.tr/" },
];

function NavBar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between py-6 dark:bg-blue-600 bg-white shadow-sm px-3 md:px-12 lg:px-36">
      <Logo />
      <div className="grid justify-start items-center grid-flow-col gap-4 font-semibold dark:text-blue-100">
        {menuElements.map((e, index) => (
          <Link href={e.targetUrl} key={index}>
            <p className="hidden md:block hover:text-red-500 dark:hover:text-blue-200 cursor-pointer">
              {e.name}
            </p>
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
        <div className="md:hidden">
          <button
            type="button"
            className="w-10 h-10 flex justify-center items-center rounded dark:bg-blue-500"
            onClick={() => toggleTheme()}
          >
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
