import Head from "next/head";
import ContactForm from "../components/contacto/ContactForm";
const proyectos = () => {
  return (
    <>
      <Head>
        <title>LuisAguilar | Contacto</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h3 className="title">Contacto</h3>
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default proyectos;
