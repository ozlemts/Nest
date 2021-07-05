import Logo from "@/components/Logo";
import Facebook from "@/components/Facebook";

function Footer() {
  return (
    <div className="w-full bg-blue-50 dark:bg-blue-700 text-center">
      <div className="px-3 lg:px-36 md:px-12 flex justify-between items-center p-6 text-gray-500">
        <Logo />
        <div className="text-right">
          <p className="text-xs">Mustafa Kemal Mah. Dumlupınar Blv.</p>
          <p className="text-xs">ODTÜ Teknokent Bilişim İnovasyon Merkezi</p>
          <p className="text-xs">
            280/G No: 1260 Alt Zemin Kat Çankaya / Ankara
          </p>
          <a href="mailto:meet@startnest.co" className="text-xs font-bold">
            meet@startnest.co
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-500 bg-white dark:bg-blue-500 tracking-widest p-1">
        2021@NEST
      </p>
    </div>
  );
}

export default Footer;
