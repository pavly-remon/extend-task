import Loading from "../assets/images/loading.gif";

export default function LoadingGIF() {
  return <div className="fixed top-[2%] w-full h-full flex flex-col justify-center items-center">
    <img src={Loading} alt="Loading" />
    <p className="font-bold">Loading...</p>
  </div>;
}