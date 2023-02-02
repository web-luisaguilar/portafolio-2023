import Image from "next/image";
const MdxComponents = {
  h1: (props: any) => (
    <h2
      className="pt-8 pb-2  text-xl font-semibold uppercase text-white"
      {...props}
    ></h2>
  ),
  h2: (props: any) => (
    <h2
      className="pt-8 pb-2  text-xl font-semibold uppercase text-white"
      {...props}
    ></h2>
  ),
  h3: (props: any) => (
    <h2 className=" pt-8 pb-2 font-semibold text-white" {...props}></h2>
  ),
  h4: (props: any) => (
    <h3 className="pt-8 pb-2  font-semibold text-white" {...props}></h3>
  ),
  p: (props: any) => <p className="text-white" {...props}></p>,
  ul: (props: any) => <ul className="list-inside list-disc" {...props}></ul>,
  li: (props: any) => <li className="text-white" {...props}></li>,
  strong: (props: any) => <strong className="text-white" {...props}></strong>,
  em: (props: any) => <em className="text-sm text-white" {...props}></em>,
  blockquote: (props: any) => (
    <blockquote className="relative ml-2 bg-[#485368]/40 shadow-sm shadow-black/50 before:absolute before:-ml-2 before:h-full before:w-2 before:bg-white/30">
      <em className="flex py-1 px-2" {...props}></em>
    </blockquote>
  ),
  pre: (props: any) => (
    <div className="shadow-md shadow-black/20">
      <pre className="" {...props}></pre>
    </div>
  ),
  img: (props: any) => (
    <Image
      src={""}
      alt={""}
      className="m-auto my-4 aspect-auto max-h-[500px] w-auto border border-white/10 p-4 shadow-inner shadow-black/80"
      {...props}
      width={100}
      height={100}
    />
  ),
};

export default MdxComponents;
