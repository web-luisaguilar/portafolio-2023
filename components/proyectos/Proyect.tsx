import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../Card";

export interface Proyect {
  title: string;
  date: string;
  languages: string[];
  github: string;
  demo?: string;
  slug: string;
  description: string;
}
const initialProyect: Proyect = {
  title: " test",
  date: " tes",
  languages: ["test", "test"],
  github: " tes",
  demo: " tes",
  slug: " test",
  description: "test",
};
const Proyect = ({ proyectData }: { proyectData: Proyect }) => {
  const [proyect, setProyect] = useState<Proyect>(initialProyect as Proyect);
  useEffect(() => {
    setProyect(proyectData);
  }, [proyectData]);
  console.log(proyect);
  return (
    <>
      <Card proyectData={proyectData}>
        <>
          <div>
            <Link
              className="decoration-cyan-300/80 hover:underline"
              href={`/proyectos/${proyectData?.slug || ""}`}
            >
              <h3 className="text-center text-xl font-bold uppercase text-cyan-400">
                {proyect?.title || "Proyecto"}
              </h3>
            </Link>

            <p className="flex text-sm text-white/50">📆{proyect?.date}</p>

            <div className="flex justify-end py-2">
              {proyect?.languages ? (
                <>
                  <p className="my-auto text-sm">Lenguajes: </p>
                  {proyect?.languages.map((language, index) => (
                    <div key={`${index}-${language}`} className="pl-1">
                      <span className="border border-white/40 px-1 text-xs capitalize text-white/40">
                        {language}
                      </span>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
          <Link
            className="h-full decoration-white/50 hover:underline"
            href={`/proyectos/${proyectData?.slug || ""}`}
          >
            <p className="h-full text-base text-white/70">
              {proyect?.description}
            </p>
          </Link>

          <div className="flex  justify-around pt-4">
            {proyect.github ? (
              <Link
                className="btn inline-flex"
                href={`${proyect?.github || "/proyectos"}`}
              >
                Github
              </Link>
            ) : null}
            {proyect.demo ? (
              <Link
                className="btn inline-flex"
                href={`${proyect?.demo || "/proyectos"}`}
              >
                Demo
              </Link>
            ) : null}
            <Link
              className="btn inline-flex"
              href={`/proyectos/${proyect?.slug || "/proyectos"}`}
            >
              Leer mas &raquo;
            </Link>
          </div>
        </>
      </Card>
      {/*</Link>*/}
    </>
  );
};

export default Proyect;
