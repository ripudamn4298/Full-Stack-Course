import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);

//   fetch() returns a Promise
// When you call .then() on a Promise, you're telling JavaScript "when this Promise resolves, run this function"
// The value that the Promise resolves with is automatically passed as an argument to that function, here res is passed to function

  fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    setTodos(json.todoList);
  })

  return (
   
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todos}></Todos>
      </div>
      
      
    
  )
}

export default App
