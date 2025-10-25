import React, { useEffect, useState } from "react";
import { SquarePen, Trash, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EventType {
  name: string;
  date: Date;
  file?: File;
}

interface EventCardProps {
  events: EventType[];
  onUpdateEvent?: (index: number, updatedEvent: EventType) => void;
  onDeleteEvent?: (index: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  events,
  onUpdateEvent,
  onDeleteEvent,
}) => {
  const [imageURLs, setImageURLs] = useState<Record<number, string>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string>("");

  useEffect(() => {
    const urls: Record<number, string> = {};
    events.forEach((event, index) => {
      if (event.file && event.file.type.startsWith("image/")) {
        urls[index] = URL.createObjectURL(event.file);
      }
    });
    setImageURLs(urls);

    return () => {
      Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [events]);

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditedName(events[index].name);
  };

  const handleSaveClick = (index: number) => {
    if (onUpdateEvent) {
      onUpdateEvent(index, { ...events[index], name: editedName });
    }
    setEditingIndex(null);
    setEditedName("");
  };

  return (
    <div className="flex flex-wrap gap-4 pl-16 mt-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="border border-blue-300 p-4 rounded-xl w-64 shadow-sm"
        >
          {event.file && (
            <div className="mt-2">
              {event.file.type.startsWith("image/") ? (
                <img
                  src={imageURLs[index]}
                  alt={event.file.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <p className="text-sm text-gray-600">{event.file.name}</p>
              )}
            </div>
          )}

          <div className="flex justify-between pt-2 px-2">
            {editingIndex === index ? (
              <input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="border rounded px-2 py-1 w-full text-blue-700 font-semibold"
              />
            ) : (
              <h4 className="font-semibold text-blue-700">{event.name}</h4>
            )}

            {editingIndex === index ? (
              <Check
                className="h-5 pt-1 cursor-pointer text-green-600"
                onClick={() => handleSaveClick(index)}
              />
            ) : (
              <SquarePen
                className="h-5 pt-1 cursor-pointer"
                onClick={() => handleEditClick(index)}
              />
            )}
          </div>

          <p className="text-gray-500 pl-2 font-semibold">
            {event.date.toLocaleDateString()}
          </p>

          <div className="flex justify-between mt-4">
            <Button className="bg-blue-500 w-[57%]">View</Button>
            <Button onClick={() => onDeleteEvent?.(index)}>
              <Trash className="h-4 inline w-[20%]" /> Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
