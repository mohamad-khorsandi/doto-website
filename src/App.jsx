import { useState } from 'react'
import './App.css'
import { TopBar, FilterButton } from './components/TopBar.jsx'
import TodoList from './components/TodoList.jsx'
import AddBtn from './components/AddTodo.jsx'

const Modes = {
  LIGHT_MODE: true,
  DARK_MODE: false
}

function App() {
  const [mode, setMode] = useState(Modes.LIGHT_MODE);
  const myTodos = [
    {
      todo: 'Buy milk', 
      done: true
    },
    {
      todo: 'Study React', 
      done: false
    },
    {
      todo: 'Walk dog', 
      doneState: useState(false)
    }
  ]

  return (
    <div className='main-container'>
      <h2 className='title'>TODO LIST</h2>
      <TopBar mode={mode} setMode={setMode} />
      <TodoList todos={myTodos}/>
      <AddBtn />
    </div>
  )
}

export default App
