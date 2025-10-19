import { Calendar, Camera } from "lucide-react";
import findmeai from "../../public/findmeai.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-50 to-indigo-50
 h-[500px] flex justify-center items-center gap-10"
    >
      <div className="left max-w-2xl text-gray-700 z-10">
        <h3 className="text-3xl font-bold">
          Every <span className="text-blue-500">Smile</span>.
          <br /> Every <span className="text-blue-500">Movement</span>. Just{" "}
          <span className="text-blue-600 text-3xl">Yours</span>.
        </h3>
        <p className="text-xl font-semibold text-gray-800">
          Rediscover the memories that matter
          <br /> - by finding only the photos that include you.
        </p>
        <div className="font-semibold flex gap-5 mt-3">
          <Link href={"/events"}>
            <button className="flex items-center gap-2 border-1 border-black text-white bg-blue-600 p-2 rounded-lg font-normal text-sm cursor-pointer">
              <Calendar className="w-5 h-5" />
              Create an Event
            </button>
          </Link>

          <Link href={"/events"}>
            <button className="flex items-center gap-2 border-1 border-blue-300 text-blue-500 p-2 rounded-lg font-normal text-sm cursor-pointer">
              <Camera className="w-5 h-5" />
              Get your Photos
            </button>
          </Link>
        </div>
      </div>
      <div className="right shadow-xl shadow-black/55 rounded-2xl z-10">
        <img src={findmeai.src} alt="Find Me AI" className="h-90 rounded-2xl" />
      </div>
    </div>
  );
};

export default HeroSection;
