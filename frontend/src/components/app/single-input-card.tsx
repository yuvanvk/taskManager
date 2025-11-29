import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

export const SingleInputCard = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [estimatedHours, setEstimatedHours] = useState(0);
    const [importance, setImportance] = useState(0);

    return <Card className="flex-1">
        <CardContent className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input onChange={(e) => setTitle(e.target.value)} id="title" name="title" placeholder="Enter title" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Input onChange={(e) => setDate(e.target.value)} id="due-date" name="due-date" placeholder="Enter title" type="date" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="estimate-hours">Estimated hours</Label>
                <Input onChange={(e) => setEstimatedHours(Number(e.target.value))} id="estimate-hours" name="estimate-hours" placeholder="3" type="number" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="importance">Importance (1-10)</Label>
                <Input id="importance" name="importance" placeholder="6" type="number" onChange={(e) => setImportance(Number(e.target.value))} />
            </div>
            <Button className="flex-1 w-full bg-blue-600 hover:bg-blue-800"><Plus />Add Task</Button>
        </CardContent>
    </Card>
}