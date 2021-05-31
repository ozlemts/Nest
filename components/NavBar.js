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
    <header className="flex items-center justify-between flex-wrap w-full py-10">
      <Logo color={logoColor}/>
      <div className="grid justify-start grid-flow-col gap-4">
        {
          menuElements.map((e) => (
          <p>{e.name}</p>
          ))
        }
      </div>
    </header>
  );
}

export default NavBar;
