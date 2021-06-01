import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="w-full">
        <div className="fixed w-full px-3 md: px-12 lg:px-36">
          <NavBar/>
        </div>
        <div className="mt-48 w-full px-3 md: px-12 lg:px-36">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
