import { AddTasks } from "@/components/app/add-tasks";
import { BulkInput } from "@/components/app/bulk-input";
import { PrioritzedTasks } from "@/components/app/prioritized-tasks";
import { SingleInputCard } from "@/components/app/single-input-card";
import { TaskAnalayzerInput } from "@/components/app/task-analyzer-input";
import { Navbar } from "@/components/ui/navbar";
import { useState } from "react";

export const TaskPrioritizer = () => {
   const [active, setActive] = useState<"single" | "bulk">("single");

   
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start w-full gap-x-8 my-5">
          <div className="flex-1">
            <AddTasks setActive={setActive} active={active}/>
            <div>
              {active === "single" ? <SingleInputCard />: <BulkInput />}
            </div>
            <TaskAnalayzerInput />
          </div>
          <PrioritzedTasks />
        </div>
      </div>
    </>
  );
};
