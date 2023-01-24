import { getFileBySlug, getFiles } from "../../lib/mdx";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";
import Image from "next/image";

export interface Frontmatter {
  title?: string;
  slug?: string;
  date?: string;
}
export default function Posts({
  source,
  frontmatter,
}: {
  source: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
}) {
  const components = {
    h1: (props: MDXRemoteProps) => (
      <h2
        className="pt-8 pb-2  text-2xl font-semibold uppercase text-cyan-400/90"
        {...props}
      ></h2>
    ),
    h2: (props: MDXRemoteProps) => (
      <h2
        className="pt-8 pb-2  text-2xl font-semibold uppercase text-cyan-400/90"
        {...props}
      ></h2>
    ),
    h3: (props: MDXRemoteProps) => (
      <h2 className=" pt-8 pb-2 font-semibold text-cyan-300/80" {...props}></h2>
    ),
    h4: (props: MDXRemoteProps) => (
      <h3 className="pt-8 pb-2  font-semibold text-cyan-300/80" {...props}></h3>
    ),
    p: (props: MDXRemoteProps) => <p className="text-white/80" {...props}></p>,
    ul: (props: MDXRemoteProps) => (
      <ul className="list-inside list-disc" {...props}></ul>
    ),
    li: (props: MDXRemoteProps) => (
      <li className="text-white/80" {...props}></li>
    ),
    strong: (props: MDXRemoteProps) => (
      <strong className="text-white" {...props}></strong>
    ),
    em: (props: MDXRemoteProps) => (
      <em className="text-white/80" {...props}></em>
    ),
    img: (props: MDXRemoteProps) => {
      return (
        <Image
          src={""}
          alt={""}
          className="m-auto my-4 aspect-auto max-h-[500px] w-auto border border-white/10 p-4 shadow-inner shadow-black/80"
          {...props}
          width={100}
          height={100}
        />
      );
    },
  };
  return (
    <>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h2 className="title">{frontmatter.title}</h2>
          <span className="w-full text-end text-white/80">
            📆 {frontmatter.date}
          </span>
          <div className="text-white/80">
            <MDXRemote {...source} components={components} />
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

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params, "data/proyects");
  return {
    props: { source, frontmatter },
  };
}
