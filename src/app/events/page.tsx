import React from "react";
import { Plus } from "lucide-react";
import Stats from "@/component/Stats";

const events = () => {
  return (
    <div className="pt-16 px-4">
      <div className="flex justify-between px-16 py-2">
        <h3 className="text-2xl font-semibold text-blue-950">
          Event Dashboard
        </h3>
        <button className="border-1 border-blue-300 text-white bg-blue-600 p-2 rounded-lg font-normal text-sm cursor-pointer flex items-center gap-2">
          <Plus className="inline  w-5" />
          Create New Event
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-screen pl-16 mt-5">
        <Stats card_name="Total Events" count={4} favicon_name="Image"></Stats>
        <Stats card_name="Total Photos" count={4} favicon_name="Camera"></Stats>
        <Stats card_name="Total Videos" count={4} favicon_name="Video"></Stats>
      </div>
    </div>
  );
};

export default events;
