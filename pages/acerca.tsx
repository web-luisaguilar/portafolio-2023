import Head from "next/head";
const proyectos = () => {
  return (
    <>
      <Head>
        <title>LuisAguilar | Acerca</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h3 className="title">Acerca</h3>
          <div className="relative mt-10">
            <span className="absolute right-4 text-sm text-white/70">
              Diciembre - 2022
            </span>
            <h4 className="text-xl uppercase text-cyan-500">
              Un Poco Acerca de Mi
            </h4>
            <br />
            <p>
              Hola, me llamo Luis Eduardo, soy desarrollador web Frontend y
              apacionado del mundo de la tecnologia. Busco aprender todo lo que
              pueda a un alto nivel. Me gusta aprender y estudiar todo lo que se
              pueda en cuestion de tecnologia.
            </p>
            <br />
            <p>
              Comence mi aprendizaje yendo a un cibercafé aprendiendo como
              funcionaba una computadora en la forma mas simple, debido a que me
              daba mucha curiosidad como funcionaba el internet cada vez me fui
              adentrando mas y mas en lo profundo de la tecnologia y el
              desarrollo.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default proyectos;
