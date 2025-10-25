"use client";
import React, { ChangeEvent } from "react";
import { Plus, ChevronDownIcon } from "lucide-react";
import Stats from "@/component/Stats";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EventCard from "@/component/EvetnCard";

interface EventType {
  name: string;
  date: Date;
  createdAt: Date;
  file?: File;
}

const Events = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();
  const [error, setError] = React.useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
  const [events, setEvents] = React.useState<EventType[]>([]);

  // File upload handler
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setUploadedFile(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();

    if (!name) return setError("Event name is required");
    if (!date) return setError("Please select a date");

    setEvents((prev) => [
      ...prev,
      { name, date, createdAt: new Date(), file: uploadedFile || undefined },
    ]);

    // Reset
    setUploadedFile(null);
    setError(null);
    setIsDialogOpen(false);
    e.currentTarget.reset();
    setDate(undefined);
  };

  return (
    <div className="pt-16 px-4">
      <div className="flex justify-between px-16 py-2">
        <h3 className="text-2xl font-semibold text-blue-950">
          Event Dashboard
        </h3>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <Plus className="mr-2" />
              Create New Event
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new event.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 mt-2">
                <div className="grid gap-3">
                  <Label htmlFor="name">
                    Event Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter event name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="date" className="px-1">
                    Select Event Date <span className="text-red-600">*</span>
                  </Label>

                  <Popover
                    open={isDatePickerOpen}
                    onOpenChange={setIsDatePickerOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        type="button"
                        className="w-full justify-between font-normal cursor-pointer"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selected) => {
                          setDate(selected);
                          setIsDatePickerOpen(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* File upload */}
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-950 rounded-xl cursor-pointer hover:bg-blue-50">
                  <span className="text-gray-600">
                    Click or drag file to upload
                  </span>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {error && (
                  <p className="text-sm text-red-600 font-medium mt-[-4px]">
                    {error}
                  </p>
                )}
              </div>

              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                >
                  Create
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row gap-4 w-screen pl-16 mt-5">
        <Stats
          card_name="Total Events"
          count={events.length}
          favicon_name="Image"
        />
        <Stats card_name="Total Photos" count={0} favicon_name="Camera" />
        <Stats card_name="Total Videos" count={0} favicon_name="Video" />
      </div>

      {/* User-created Event Cards */}
      <EventCard events={events} />
    </div>
  );
};

export default Events;
