import Link from "next/link";

const MENU = {
  "/": "Ana Sayfa",
  "/programs": "Programlar",
  "/nest-by": "Nest-By",
  "/nest-in": "Nest-In",
  "/blog": "Blog",
  "/contact": "İletişim",
};

function Header() {
  return (
    <header className="flex items-center justify-between flex-wrap p-6 w-full">
      <p>Logo</p>
      <p>Menü</p>
    </header>
  );
}

export default Header;
