import ProyectsGrid from "../../components/proyectos/ProyectsGrid";
import Head from "next/head";
import { getAllFilesMetadata } from "../../lib/mdx";
import { Proyect } from "../../components/proyectos/Proyect";

const proyectos = ({ proyects }: { proyects: Proyect[] }) => {
  return (
    <>
      <Head>
        <title>LuisAguilar | Proyectos</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h2 className="title">Proyectos</h2>
          <ProyectsGrid proyects={proyects} />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  let folder = "data/proyects";
  let proyects = await getAllFilesMetadata(folder);
  return { props: { proyects } };
}

export default proyectos;
