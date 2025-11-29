export const PrioritzedTasks = () => {
    return <div className="flex-1 pt-28">
        <div className="text-lg font-medium">Prioritized Tasks</div>
        <div className="text-sm text-neutral-500">Your tasks sorted by priority score</div>

        <div className="mt-5 w-full h-52 border border-dashed border-neutral-400 rounded-2xl bg-neutral-50 flex items-center justify-center">
            <div className="flex flex-col text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-todo h-12 w-12 text-muted-foreground mx-auto mb-4"><rect x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
                <p>No analysis yet</p>
                <p className="text-sm text-neutral-400 mt-2">Add tasks and click "Analyze Tasks" to see prioritized results</p>
            </div>
        </div>
    </div>
}