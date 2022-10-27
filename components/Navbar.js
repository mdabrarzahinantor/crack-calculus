import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-container">
        <div class="navbar-container-left">
          <Link href="/">
            <Image
              className="Image"
              src={Logo}
              alt="Crack Calculus Logo"
              width={166.71}
              height={64}
            />
          </Link>
        </div>
        <div class="navbar-container-right">
          <div class="navbar-container-right-container">
            <div class="nav-link downloads">
              <Link href="/downloads">Downloads</Link>
            </div>
            <div class="nav-link about">
              <Link href="/about">About</Link>
            </div>
            <div class="nav-link donate">
              <Link href="https://www.buymeacoffee.com/crackcalculus">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
