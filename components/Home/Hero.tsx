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
        <a href="/files/cv.pdf" download={"LuisAguilarCV-2023.pdf"}>
          <div className="btn flex items-center justify-center gap-x-4 px-8">
            <svg
              className=" inline-flex hover:stroke-cyan-300/70"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
            <span>Descarga mi CV</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
