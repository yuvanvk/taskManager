import { AddTasks } from "@/components/app/add-tasks";
import { Navbar } from "@/components/ui/navbar";

export const TaskPrioritizer = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <AddTasks />
      </div>
    </>
  );
};
