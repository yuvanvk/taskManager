import { Moon } from "lucide-react"

export const Navbar = () => {
    return (<div className="fixed w-full top-0 border-b bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
            <div className="flex gap-x-2 items-center px-3 py-5">
                <div className="bg-blue-600 px-2 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-todo h-6 w-6 text-primary-foreground"><rect x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
                </div>
                <div className="flex flex-col">
                    <div className="font-medium text-2xl">Task Prioritizer Pro</div>
                    <div className="text-sm text-neutral-500">Smart Task Management</div>
                </div>
            </div>

            <div>
                <Moon />
            </div>
        </div>
    </div>)
}