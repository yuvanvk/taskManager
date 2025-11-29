import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { TaskContext, type Task } from "@/context/TaskContext";
import { toast } from "sonner";

export const BulkInput = () => {
  let { setTasks } = useContext(TaskContext);
  const [input, setInput] = useState<string>();


  const handleBulkSubmit = () => {
    if(!input?.trim()) {
        toast("Input is empty")
        return
    }
    try {
        let parsed: Task[]
        parsed = JSON.parse(input)

        if(!Array.isArray(parsed)) {
            toast("NOt a valid JSON format");
            return
        }

        setTasks(c => [...c, ...parsed])
        toast("Imported successfully")
    } catch (error) {
        toast("Please provide correct JSON array")
    }
  }

  return (
    <Card>
      <CardContent className="space-y-4">
        <Label className="text-lg">Bulk Import (JSON)</Label>
        <textarea
          onChange={(e) => {
            setInput(e.target.value)
          }}
          placeholder="Paste array of tasks here..."
          className="w-full h-52 px-2 py-1"
        />

        <p className="text-xs text-neutral-400 whitespace-nowrap">
          Format: Array of objects with title, dueDate (YYYY-MM-DD), effort
          (1-10), and importance (1-10)
        </p>

        <Button onClick={handleBulkSubmit} className="bg-blue-600 hover:bg-blue-800 w-full">
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
            className="lucide lucide-upload mr-2 h-4 w-4"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" x2="12" y1="3" y2="15"></line>
          </svg>
          Import Tasks
        </Button>
      </CardContent>
    </Card>
  );
};
