import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const logoColor = "#222147";

const menuElements = [
  { name: "Programlar", targetUrl: "/" },
  { name: "Nest-By", targetUrl: "/" },
  { name: "Nest-In", targetUrl: "/create" },
  { name: "Blog", targetUrl: "/startups" },
  { name: "İletişim", targetUrl: "https://blog.viveka.com.tr/" },
];

function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap py-6 bg-white">
      <Logo color={logoColor} />
      <div className="grid justify-start items-center grid-flow-col gap-4 font-semibold">
        {menuElements.map((e) => (
          <a className="text-blue-400 hover:text-red-600" target={e.targetUrl}>
            {e.name}
          </a>
        ))}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 rounded"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <img src="/moon.svg" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
