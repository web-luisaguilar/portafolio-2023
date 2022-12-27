import Head from "next/head";
import BlogGrid from "../components/blog/BlogGrid";

const proyectos = () => {
  return (
    <>
      <Head>
        <title>LuisAguilar | Blog</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h3 className="title">Blog</h3>
          <BlogGrid />
        </section>
      </div>
    </>
  );
};

export default proyectos;
