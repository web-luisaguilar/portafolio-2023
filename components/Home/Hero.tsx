import Image from "next/image";
import logo from "../../public/images/full-logo.svg";

const Hero = () => {
  return (
    <section className="section-initial">
      <div className="flex justify-center py-20">
        <Image
          src={logo}
          alt="LuisAguilar-logo"
          width={450}
          className="aspect-square"
        />
      </div>
      <div className="flex-col ">
        <p className="text-base text-white/80 md:text-xl">
          !Hola¡ Soy un desarrollador Autodidacta amante de la tecnologia.
          Apacionado por aprender mucho sobre el mundo del desarrollo web y
          mucho mas. Vivo en la Ciudad de Mexico
        </p>
      </div>
      <div className="flex justify-center pt-20">
        <div className="btn">Download CV</div>
      </div>
    </section>
  );
};

export default Hero;
