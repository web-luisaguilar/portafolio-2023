import Head from "next/head";
import { Post } from "../../components/blog/BlogCard";
import BlogGrid from "../../components/blog/BlogGrid";
import { getAllFilesMetadata } from "../../lib/mdx";

const proyectos = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>LuisAguilar | Blog</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div className="box-default flex-col">
        <section className="section-initial justify-start">
          <h3 className="title">Blog</h3>
          <BlogGrid posts={posts} />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  let folder = "data/posts";
  let posts = await getAllFilesMetadata(folder);
  return { props: { posts } };
}

export default proyectos;
