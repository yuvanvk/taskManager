import { createContext } from "react";

export type Task = {
    id: number,
    title: string,
    date: string,
    estimatedHours: number,
    importance: number,
    score?: number,
    dependencies?: {id: number, value: string}[],
}

export type TaskContextType = {
    tasks: Task[],
    setTasks:  React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    setTasks: () => {}
})