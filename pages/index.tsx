import Head from "next/head";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Aguilar</title>
        <meta name="description" content="Portafolio Web de LuisAguilar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="box-default flex-col">
        <Hero />
        <Skills />
        <SocialMedia />
      </div>
    </>
  );
}
