import { useContext } from "react";
import { PrioritizedCard } from "./prioritized-card";
import { AnalyzedContext } from "@/context/AnalyzedContext";
import { TaskContext } from "@/context/TaskContext";

export const PrioritzedTasks = () => {

  const { analyzed } = useContext(AnalyzedContext)
  const { tasks } = useContext(TaskContext)


  return (
    <div className="flex-1 pt-28">
      <div className="text-lg font-medium">Prioritized Tasks</div>
      <div className="text-sm text-neutral-500">
        Your tasks sorted by priority score
      </div>

      {analyzed && (
        <div className="mt-5 w-full h-52 border border-dashed border-neutral-400 rounded-2xl bg-neutral-50 flex items-center justify-center">
          <div className="flex flex-col text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-list-todo h-12 w-12 text-muted-foreground mx-auto mb-4"
            >
              <rect x="3" y="5" width="6" height="6" rx="1"></rect>
              <path d="m3 17 2 2 4-4"></path>
              <path d="M13 6h8"></path>
              <path d="M13 12h8"></path>
              <path d="M13 18h8"></path>
            </svg>
            <p>No analysis yet</p>
            <p className="text-sm text-neutral-400 mt-2">
              Add tasks and click "Analyze Tasks" to see prioritized results
            </p>
          </div>
        </div>
      )}

      {!analyzed && (
        <div>
            <div className="w-full h-24 flex flex-col bg-blue-600/10 px-4 py-5 rounded-xl border border-blue-200 space-y-2 my-3">
          <div className="flex items-center text-blue-600 gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-sparkles h-5 w-5 text-blue-500"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Analyze Results
          </div>
          <p className="text-sm text-neutral-500 whitespace-nowrap">
            Tasks are sorted from highest to lowest priority. Start with the top
            tasks for maximum productivity.
          </p>
        </div>

        <div className="space-y-3">
              {tasks.map((t, idx) => (
                 <PrioritizedCard task={t} key={idx}/>
              ))} 
        </div>
        </div>

      )}
    </div>
  );
};
