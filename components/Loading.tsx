import loadingImg from "../public/images/loader.svg";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="m-auto w-full ">
      <Image className="m-auto" src={loadingImg} alt="Loading..." width={50} />
    </div>
  );
};

export default Loading;
