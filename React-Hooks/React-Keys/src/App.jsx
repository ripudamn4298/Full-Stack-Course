import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// make sure each element of the array , here todos, has a unique key
let counter=4;
function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      title:"hsjfv",
      description:"fhk"
    },
    {
      id:2,
      title:"hsjfv",
      description:"fhk"
    },
    {
      id:3,
      title:"hsjfv",
      description:"fhk"
    }
  ])
  
  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title:"fh",
      description:"kdjwkj"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
    </div>
      
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>

  </div>

}

export default App
