import Image from "next/image";
const Card = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <div className="card">
      <Image
        src="/images/proyectos-default.jpg"
        alt="default proyect"
        width={300}
        height={170}
        className="aspect-video"
      />

      <div className="flex flex-col p-4">{children}</div>
    </div>
  );
};

export default Card;
