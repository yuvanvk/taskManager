import { AddTasks } from "@/components/app/add-tasks";
import { PrioritzedTasks } from "@/components/app/prioritized-tasks";
import { SingleInputCard } from "@/components/app/single-input-card";
import { Navbar } from "@/components/ui/navbar";

export const TaskPrioritizer = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start w-full gap-x-8 my-5">
          <div className="flex-1">
            <AddTasks />
            <div>
              <SingleInputCard />
            </div>
          </div>
          <PrioritzedTasks />
        </div>
      </div>
    </>
  );
};
