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
        <p className="text-center text-base text-white/80 md:text-2xl">
          !Hola, Soy Desarrollador Frontend autodidacta y apacionado del mundo
          de la tecnologia.
        </p>
        <br />
        <p className="text-center text-base text-white/80 md:text-xl">
          Busco aprender todo lo que pueda a un alto nivel principalmente a
          nivel de desarrollo web y aunque me centro en el Frontend con{" "}
          <b>React.js</b>, <b>Typescript</b> y mas. tambien tengo conocimiento
          en el area Backend y mantenimiento de equipos de computo.
        </p>
      </div>
      <div className="flex justify-center pt-20">
        <div className="btn">Download CV</div>
      </div>
    </section>
  );
};

export default Hero;
