import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
export interface Post {
  title: string;
  date: string;
  languages?: string[];
  github?: string;
  slug: string;
  description: string;
}

const initialProyect: Post = {
  title: "",
  date: "",
  languages: [""],
  github: "",
  slug: "",
  description: "",
};

const BlogCard = ({ postData }: { postData: Post }) => {
  const [post, setPost] = useState<Post>(initialProyect);
  useEffect(() => {
    setPost(postData);
  }, [postData]);

  return (
    <>
      <div className="card ">
        <Link href={`/blog/${post?.slug || ""}`}>
          <Image
            src="/images/blog-default.png"
            alt="default proyect"
            width={300}
            height={170}
            className=" aspect-video"
          />
        </Link>

        <div className="flex h-full w-full flex-col justify-between gap-y-2 p-4">
          <div>
            <Link
              className="decoration-cyan-300/80 hover:underline"
              href={`/blog/${post?.slug || ""}`}
            >
              <h3 className="text-center text-xl font-bold uppercase text-cyan-400">
                {post?.title || "Sin Titulo"}
              </h3>
            </Link>

            <p className="flex items-center align-middle text-sm text-white/80">
              📆{post?.date || "Sin Fecha de Publicación"}
            </p>

            <div className="flex justify-end py-2">
              {post?.languages ? (
                <>
                  <p className="my-auto text-sm">Lenguajes: </p>
                  {post?.languages.map((language, index) => (
                    <div
                      key={`${index}-${language}`}
                      className="flex items-center pl-1"
                    >
                      <span className="border border-white/40 px-1 text-xs capitalize text-white/40 hover:bg-white/10">
                        {language}
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex items-center pl-1">
                  <span className="border border-white/40 px-1 text-xs capitalize text-white/40 hover:bg-white/10">
                    Blog Post
                  </span>
                </div>
              )}
            </div>
          </div>
          {post.description ? (
            <Link
              className="h-full decoration-white/50 hover:underline"
              href={`/blog/${post?.slug || ""}`}
            >
              <p className="h-full text-base text-white">{post?.description}</p>
            </Link>
          ) : (
            <p className="h-full text-base text-white">Sin descripcion</p>
          )}

          <div className="flex  justify-around pt-4">
            {post.github ? (
              <Link
                className="btn inline-flex"
                href={`${post?.github || "/blog"}`}
              >
                Github
              </Link>
            ) : null}
            <Link
              className="btn inline-flex"
              href={`blog/${post?.slug || "blog"}`}
            >
              Leer mas &raquo;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
