import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/navbar/letras.svg";
import SocialMedia, { SocialMediaSize } from "./SocialMedia";
const Header = () => {
  return (
    <header className="header z-50">
      <div className="box-default">
        <Link href="/" className=" hidden min-w-[170px] md:flex">
          <Image src={logo} alt="LuisAguilar-Logo" width={250} />
        </Link>
        <nav className="flex  w-full items-center justify-around text-white/60">
          <Link href="/" className="navBarButton">
            Home
          </Link>
          <Link href="/proyectos" className="navBarButton">
            Proyectos
          </Link>
          <Link href="/blog" className="navBarButton">
            Blog
          </Link>
          <Link href="/acerca" className="navBarButton">
            Acerca
          </Link>
          <Link href="/contacto" className="navBarButton">
            Contacto
          </Link>
        </nav>
        <div className="hidden min-w-[170px] md:flex">
          <SocialMedia size={SocialMediaSize.SMALL} />
        </div>
      </div>
    </header>
  );
};

export default Header;
