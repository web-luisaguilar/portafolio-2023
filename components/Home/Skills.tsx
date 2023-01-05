import Image from "next/image";

const publicPath = "images/icons";
const skillsData = [
  {
    name: "css",
    icon: `${publicPath}/css-icon.svg`,
  },
  {
    name: "html",
    icon: `${publicPath}/html-icon.svg`,
  },
  {
    name: "javascript",
    icon: `${publicPath}/js-icon.svg`,
  },
  {
    name: "react",
    icon: `${publicPath}/react-icon.svg`,
  },
  {
    name: "nextjs",
    icon: `${publicPath}/nextjs-icon.svg`,
  },
  {
    name: "tailwindcss",
    icon: `${publicPath}/tailwindcss-icon.svg`,
  },
  {
    name: "typescript",
    icon: `${publicPath}/typescript-icon.svg`,
  },
];

const Skills = () => {
  return (
    //bg-slate-700/5 py-10 shadow-inner shadow-white/5 agreagar para fondo
    <section className="section my-10 min-h-[40vh]  ">
      <div className="h-full w-full">
        <h2 className="subtitle ">Habilidades</h2>
        <div className="flex max-w-full flex-wrap justify-around gap-6 p-4 pt-10">
          {skillsData.map((data, i) => (
            <figure
              key={i}
              className="bg-white/10 p-2 opacity-60 hover:scale-105 hover:opacity-100 hover:shadow-md hover:shadow-black/50"
            >
              <Image
                src={data.icon}
                width={100}
                height={100}
                style={{ animationDuration: "1500ms" }}
                className={`aspect-square ${
                  data.name == "react" ? "hover:animate-spin" : ""
                }`}
                alt={data.name}
              />
              <figcaption className="pt-2 text-center capitalize">
                {data.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
