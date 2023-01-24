import Image from "next/image";
import Link from "next/link";
import { Proyect } from "./proyectos/Proyect";
const Card = ({
  children,
  proyectData,
}: {
  children: React.ReactNode;
  proyectData: Proyect;
}) => {
  return (
    <div className="card ">
      <Link href={`/proyectos/${proyectData?.slug || ""}`}>
        <Image
          src="/images/proyectos-default.jpg"
          alt="default proyect"
          width={300}
          height={170}
          className=" aspect-video"
        />
      </Link>

      <div className="flex h-full flex-col justify-between gap-y-2 p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
