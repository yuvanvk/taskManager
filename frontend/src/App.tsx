
import { BrowserRouter, Route, Routes } from 'react-router'
import { TaskPrioritizer } from './pages/task-prioritizer'
import { useState } from 'react'
import { TaskContext, type Task } from './context/TaskContext'

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TaskContext value={{tasks, setTasks}}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskPrioritizer />}/>
        </Routes>
      </BrowserRouter>
    </TaskContext>
  )
}

export default App
