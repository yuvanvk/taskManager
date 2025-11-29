import { createContext } from "react";

export type Task = {
    id: number,
    title: string,
    date: string,
    estimatedHours: number,
    importance: number,
    score?: number
}

export type TaskContextType = {
    tasks: Task[],
    setTasks:  React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    setTasks: () => {}
})