import Logo from "@/components/Logo";
import Facebook from "@/components/Facebook";

function Footer() {
  return (
    <div className="w-full mt-12 bg-blue-50 dark:bg-blue-700 text-center">
      <div className="px-3 lg:px-36 md:px-12 flex justify-between p-6 text-gray-500">
        <Logo />
        <div>
          <Facebook />
        </div>
      </div>
      <p className="text-sm text-gray-500 bg-white dark:bg-blue-500 p-1">
        2021@NEST
      </p>
    </div>
  );
}

export default Footer;
