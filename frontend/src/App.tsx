
import { BrowserRouter, Route, Routes } from 'react-router'
import { TaskPrioritizer } from './pages/task-prioritizer'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskPrioritizer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
