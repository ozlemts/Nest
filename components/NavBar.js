import Link from "next/link";
import Logo from "@/components/Logo";

const logoColor = '#222147'

const menuElements = [
  { name: "Programlar", targetUrl: "/"},
  { name: "Nest-By", targetUrl: "/"},
  { name: "Nest-In", targetUrl: "/create"},
  { name: "Blog", targetUrl: "/startups"},
  { name: "İletişim", targetUrl: "https://blog.viveka.com.tr/"}
];

function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap py-6 bg-white">
      <Logo color={logoColor}/>
      <div className="grid justify-start grid-flow-col gap-4 font-semibold">
        {
          menuElements.map((e) => (
          <p className="opacity-80">{e.name}</p>
          ))
        }
      </div>
    </nav>
  );
}

export default NavBar;
