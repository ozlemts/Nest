import Logo from "@/components/Logo";

function Footer() {
  return (
    <div className="w-full mt-12 bg-blue-50 dark:bg-blue-700 text-center">

      <div className="px-3 lg:px-36 md:px-12 flex justify-between p-6 ">
        <Logo />
        <div>vff</div>
      </div>
      <p className="text-sm text-gray-500 bg-white p-1">2021@NEST</p>
    </div>
  );
}

export default Footer;
