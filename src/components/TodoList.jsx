import { useState } from 'react'
import './TodoList.css'
import { Check, Trash2, Pencil, Space } from 'lucide-react'

function TodoList ({todos}) {
  return (
    <div className='todo-list'>
      {todos.map((item, index) => (
        <Todo 
        todo={item.todo} 
        key={index} 
        lastTodo={index === todos.length - 1}
        done={item.done}/>
      ))}
    </div>
  )
}

function Todo ({todo, done, lastTodo}) {
  const [checked, setChecked] = useState(done)
  return (
    <div className={`todo ${lastTodo ? 'last-todo' : ''}`}>
      <button 
        className= {`check-box ${checked ? 'checked' : ''} `}
        onClick={() => setChecked(!checked)}>
        {checked ? <Check className='check-icon'/> : null}
      </button>

      <p className= {`todo-text ${checked ? 'checked' : ''} `}>{todo}</p>

      <span className='white-space'></span>
      
      <Pencil className='pen-icon'/>

      <Trash2 className='trash-icon'/>
    </div>
  )
}


export default TodoList