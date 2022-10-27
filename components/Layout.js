import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import HeadComponent from "./Head";
import Links from "./Links";

export default function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      <Navbar />
      <Sidenav />
      <main>{children}</main>
      <Links />
      <Footer />
    </>
  );
}
