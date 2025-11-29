import type { Task } from "@/context/TaskContext"
import { Card, CardContent } from "../ui/card"

export const PrioritizedCard = ({ task }: { task: Task}) => {
    return <Card>
        <CardContent>
            <div className="flex items-center justify-between">
                <div className="text-xl font-medium">{task.title}</div>
                <div className="font-bold text-blue-600">7.4 score</div>
            </div>
            <hr />
            <p className="text-sm my-2">Balanced score: Importance (6/10), Urgency (9.3/10), Effort (3/10). Optimal work-impact ratio.</p>
        </CardContent>
    </Card>
}