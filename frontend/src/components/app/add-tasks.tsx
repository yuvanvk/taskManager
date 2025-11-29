import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const AddTasks = () => {
  const [active, setActive] = useState<"single" | "bulk">("single");

  return (
    <div className="w-full pt-28">
      <div className="font-medium text-lg">Add your tasks</div>
      <div className="text-neutral-500 text-sm">
        Add tasks individually or import multiple tasks at once
      </div>
      <div className="flex items-center bg-gray-100 py-1 px-1 rounded-lg my-4">
        <Button
          onClick={() => {
            setActive("single");
          }}
          className={cn(
            `${
              active === "single"
                ? "bg-blue-600 text-white hover:bg-blue-800"
                : "bg-transparent text-black hover:bg-gray-200"
            }`,
            "flex-1 cursor-pointer  transition-all"
          )}
        >
          Single Task
        </Button>
        <Button
          onClick={() => {
            setActive("bulk");
          }}
          className={cn(
            `${
              active === "bulk"
                ? "bg-blue-600 text-white hover:bg-blue-800"
                : "bg-transparent text-black hover:bg-gray-200 cursor-pointer"
            } `,
            "flex-1 transition-all"
          )}
        >
          Bulk import
        </Button>
      </div>
    </div>
  );
};



