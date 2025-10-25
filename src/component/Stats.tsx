import React from "react";
import { Image, Camera, Video } from "lucide-react";

type StatsProps = {
  card_name: string;
  count: number;
  favicon_name: string;
};

const Stats: React.FC<StatsProps> = ({ card_name, count, favicon_name }) => {
  return (
    <div>
      <div className="bg-linear-to-br from-blue-100 to-blue-400 p-4 rounded-lg shadow-md w-80 flex gap-5 items-center">
        {favicon_name === "Camera" && (
          <Camera className="bg-white p-3 w-12 h-12 rounded-full" />
        )}
        {favicon_name === "Image" && (
          <Image className="bg-white p-3 w-12 h-12 rounded-full" />
        )}
        {favicon_name === "Video" && (
          <Video className="bg-white p-3 w-12 h-12 rounded-full" />
        )}
        <div>
          <h4 className="text-lg font-medium text-gray-800">{card_name}</h4>
          <p className="text-2xl font-bold text-blue-600">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
