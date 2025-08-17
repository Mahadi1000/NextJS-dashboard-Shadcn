"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? date.toLocaleDateString() : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* List item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox checked />
              <label className="text-sm font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox checked />
              <label className="text-sm font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox checked />
              <label className="text-sm font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox checked />
              <label className="text-sm font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox checked />
              <label className="text-sm font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox checked />
              <label className="text-sm font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
