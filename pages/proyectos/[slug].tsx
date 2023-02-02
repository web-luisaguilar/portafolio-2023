import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import MdxComponents from "../../components/MdxComponents";

export default function Posts({
  source,
  frontmatter,
}: {
  source: MDXRemoteSerializeResult;
  frontmatter: any;
}) {
  return (
    <>
      <Head>
        <title>LuisAguilar | Proyecto</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h2 className="title">{frontmatter.title}</h2>
          <span className="w-full text-end text-white/80">
            📆 {frontmatter.date}
          </span>
          <div className="">
            <MDXRemote {...source} components={MdxComponents} />
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const proyects = await getFiles("data/proyects");
  const paths = proyects.map((proyect) => ({
    params: {
      slug: proyect.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { source, frontmatter } = await getFileBySlug(
    params.slug,
    "data/proyects"
  );
  return {
    props: { source, frontmatter },
  };
}
