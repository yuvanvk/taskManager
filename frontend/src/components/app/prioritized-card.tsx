import type { Task } from "@/context/TaskContext"
import { Card, CardContent } from "../ui/card"

export const PrioritizedCard = ({ task }: { task: Task}) => {
    const daysLeft = Math.ceil((new Date(task.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))

    return <Card>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="text-xl font-medium">{task.title}</div>
                <div className="font-bold text-blue-600">{task.score} score</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">Due date</p>
                    <p className="text-[13px] font-medium">{task.date}</p>
                    <p className="text-xs">
                        {daysLeft < 0 ? "overdue" : `${daysLeft} days left`}
                    </p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target h-4 w-4"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        <div className="flex flex-col">
                            <p className="text-xs text-neutral-500">Importance</p>
                            <p className="text-sm font-medium">{task.importance}/10</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-sm my-2">Balanced score: Importance {task.importance}/10, Estimated Hours {task.estimatedHours}.</p>
        </CardContent>
    </Card>
}