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
      <div className="lg:max-w-7xl mx-auto px-2">
        <div className="flex flex-col lg:flex-row items-start w-full gap-x-8 my-5">
          <div className="w-full lg:flex-1">
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
