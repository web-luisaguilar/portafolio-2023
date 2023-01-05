import Image from "next/image";
import Link from "next/link";
import githubIcon from "../public/images/icons/github-icon.svg";
import twitterIcon from "../public/images/icons/twitter-icon.svg";
import linkedinIcon from "../public/images/icons/linkedin-icon.svg";
import discordIcon from "../public/images/icons/discord-icon.svg";

const dataMedia = [
  {
    name: "Github",
    path: githubIcon.src,
    url: "https://github.com/web-luisaguilar",
  },
  {
    name: "Twitter",
    path: twitterIcon.src,
    url: "https://twitter.com/luisaguilarweb",
  },
  {
    name: "Linkedin",
    path: linkedinIcon.src,
    url: "https://www.linkedin.com/in/luisebprogramer/",
  },
  {
    name: "Discord",
    path: discordIcon.src,
    url: "https://discord.gg/gKMQVsCCfK",
  },
];
export enum SocialMediaSize {
  SMALL = "small",
}
interface Props {
  size?: SocialMediaSize;
}
const SocialMedia = (props: Props) => {
  switch (props.size) {
    case SocialMediaSize.SMALL:
      return (
        <>
          <div className="flex items-center ">
            {dataMedia.map((el, i) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={el.url}
                className="flex bg-white/5 p-2 duration-100 hover:translate-y-1.5 hover:shadow-sm hover:shadow-black "
                key={i}
              >
                <Image src={el.path} alt={el.name} width={40} height={40} />
              </Link>
            ))}
          </div>
        </>
      );
    default:
      return (
        <>
          <section className="section ">
            <h2 className="subtitle py-10">Redes Sociales</h2>
            <div className="flex w-full items-center justify-center gap-1 ">
              {dataMedia.map((el, i) => (
                <Link
                  key={i}
                  href={el.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex "
                >
                  <figure className=" flex min-w-[100px] flex-col items-center justify-center bg-white/5 p-4 opacity-60 duration-150 hover:-translate-y-2 hover:opacity-100 hover:shadow-md hover:shadow-black">
                    <Image
                      src={el.path}
                      alt={el.name}
                      width={60}
                      height={60}
                      className="py-2 hover:animate-spin"
                      style={{ animationDuration: "2000ms" }}
                    />
                    <figcaption className=" text-white/80">
                      {el.name}
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
          </section>
        </>
      );
  }
};

export default SocialMedia;
