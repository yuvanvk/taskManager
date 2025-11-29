import { useContext } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TaskContext } from "@/context/TaskContext";
import axios, { type AxiosResponse } from "axios";
import { toast } from "sonner";
import { AnalyzedContext } from "@/context/AnalyzedContext";

export const TaskAnalayzerInput = () => {
  const { tasks, setTasks } = useContext(TaskContext); 
  const { setAnalyzed } = useContext(AnalyzedContext);

  const handleAnalyze = async () => {
    const response: AxiosResponse = await axios.post(
      "http://localhost:8000/api/tasks/analyze/",
      {
        tasks,
      }
    );
    if (response.status === 200) {
      toast("Analyzed successfully");
    }

    const getTopThreeTasksResponse = await axios.get(
      "http://localhost:8000/api/tasks/suggest/"
    );
    if (getTopThreeTasksResponse.status === 200) {
        console.log(getTopThreeTasksResponse.data);
        
      toast.success("Your top tasks to perform are listed");
      setTasks(getTopThreeTasksResponse.data);
      setAnalyzed(true);
    }
    if (getTopThreeTasksResponse.status !== 200) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col w-full my-5">
      <div className="text-lg font-medium">{`Tasks added: ${tasks.length}`}</div>
      <p className="text-sm text-neutral-500">Select a strategy and analyze</p>
      <div className="my-4 space-y-2">
        <Label className="text-lg font-medium">Prioritization Strategy</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Strategy" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="smart-balance">Smart Balance</SelectItem>
            <SelectItem value="high-impact">High Impact</SelectItem>
            <SelectItem value="deadline-driven">Deadline Driven</SelectItem>
            <SelectItem value="fastest-wins">Fastest Wins</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-neutral-500">
          Optimal algorithm balancing all factors for maximum efficiency
        </p>
      </div>
      <Button onClick={handleAnalyze} className="bg-blue-600 hover:bg-blue-800">
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
          className="lucide lucide-sparkles mr-2 h-5 w-5"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </svg>
        Analyze Tasks
      </Button>
    </div>
  );
};
