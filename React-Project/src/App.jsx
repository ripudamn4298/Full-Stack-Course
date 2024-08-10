import { useDebugValue } from "react";
import { useState } from "react";
// let state ={
//   count :0
// }



function App() {

  const [todos,setTodo] = useState([{
    title:"title1",
    description:"description1"
  },{
    title:"title2",
    description:"description2"

  }]);

  function addTodo(){
    setTodo([...todos, {
      title:"newTitle",
      description:"NewDescription"
    }])
  }


  return (
    <div>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>

      })}
      <button onClick={addTodo}>Add Task</button>

      

    </div>
  )
  
}
//props is state

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>

    </div>
    
  )
}



export default App
