import Footer from "./Footer";
import Header from "./Header";

const Layout = (prop) => {
  return (
    <div>
      <Header />
      <main>{prop.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
