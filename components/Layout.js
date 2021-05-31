import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="px-3 md: px-12 lg:px-36 ">
        <NavBar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
