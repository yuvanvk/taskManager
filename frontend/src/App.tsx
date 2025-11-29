
import { BrowserRouter, Route, Routes } from 'react-router'
import { TaskPrioritizer } from './pages/task-prioritizer'
import { useState } from 'react'
import { TaskContext, type Task } from './context/TaskContext'
import { AnalyzedContext } from './context/AnalyzedContext'

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [analyzed, setAnalyzed] = useState(false);
  
  return (
    <TaskContext value={{tasks, setTasks}}>
      <AnalyzedContext value={{ analyzed, setAnalyzed }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskPrioritizer />}/>
          </Routes>
        </BrowserRouter>
      </AnalyzedContext>
    </TaskContext>
  )
}

export default App
