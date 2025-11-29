import { useContext, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";
import { TaskContext } from "@/context/TaskContext";

export const SingleInputCard = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState<number>(0);
  const [estimatedHours, setEstimatedHours] = useState(0);
  const [importance, setImportance] = useState(0);
  const [dependencies, setDependencies] = useState<{id: number, value: string}[]>([]);

  console.log(dependencies);
  
  const { setTasks } = useContext(TaskContext);

  const handleTaskSubmit = () => {
    setTasks((c) => [...c, { id, title, estimatedHours, date, importance }]);
  };

  const handleAddDependencies = () => {
    setDependencies((c) => [...c, {
        id: Date.now(),
        value: "task-id"
    }]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setDependencies(c => c.map(d => d.id === id ? {...d, value: e.target.value} : d))
 }

  const handleRemoveTask = (id: number) => {
    const updated = dependencies.filter((dep) =>  dep.id !== id)
    setDependencies(updated)
  }

  return (
    <Card className="flex-1">
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="id">Task Id</Label>
          <Input
            onChange={(e) => setId(Number(e.target.value))}
            type="number"
            id="id"
            name="id"
            placeholder="task-1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            placeholder="Enter title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="due-date">Due Date</Label>
          <Input
            onChange={(e) => setDate(e.target.value)}
            id="due-date"
            name="due-date"
            placeholder="Enter title"
            type="date"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="estimate-hours">Estimated hours</Label>
          <Input
            onChange={(e) => setEstimatedHours(Number(e.target.value))}
            id="estimate-hours"
            name="estimate-hours"
            placeholder="3"
            type="number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="importance">Importance (1-10)</Label>
          <Input
            id="importance"
            name="importance"
            placeholder="6"
            type="number"
            onChange={(e) => setImportance(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="dependencies">
              Dependencies{" "}
              <span className="text-neutral-500">
                (Add task id's which are dependent on this task)
              </span>
            </Label>
            <Plus
              onClick={handleAddDependencies}
              size={20}
              className="text-neutral-500 cursor-pointer"
            />
          </div>
          {dependencies.map((d) => (
            <div key={d.id} className="flex items-center gap-x-2">
                <Input onChange={(e) => handleChange(e, d.id)} type="text" placeholder={d.value}  />
                <X onClick={() => handleRemoveTask(d.id)} size={20} className="text-neutral-500"/>
            </div>
          ))}
        </div>
        <Button
          onClick={handleTaskSubmit}
          className="flex-1 w-full bg-blue-600 hover:bg-blue-800"
        >
          <Plus />
          Add Task
        </Button>
      </CardContent>
    </Card>
  );
};
