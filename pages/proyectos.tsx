import ProyectsGrid from "../components/proyectos/ProyectsGrid";
import Head from "next/head";

const proyectos = () => {
  return (
    <>
      <Head>
        <title>LuisAguilar | Proyectos</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h2 className="title">Proyectos</h2>
          <ProyectsGrid />
        </section>
      </div>
    </>
  );
};

export default proyectos;
