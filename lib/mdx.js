import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";

const root = process.cwd();
const folderDefault = "data/posts";

//Leer la lista de archivos dentro de la carpeta data
export const getFiles = async (folder) =>
  fs.readdirSync(path.join(root, folder || folderDefault));

//Lee un Archivo dentro de la carpeta data por su slug
export const getFileBySlug = async ({ slug }, folder) => {
  const mdxSource = fs.readFileSync(
    path.join(root, folder || folderDefault, `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });

  //retorna el source (recurso ) serializado por serialize y un objeto que contiene el slug y la metadata

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetadata = async (folder) => {
  const files = await getFiles(folder);

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, folder || folderDefault, postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
