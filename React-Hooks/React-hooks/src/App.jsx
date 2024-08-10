import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header  from './components/Header'

function App() {
  const [title,setTitle] = useState("My name is Ripudaman");
  

  return (
    <div>
    <button onClick={ function() {
      setTitle("My name is "+ Math.random());
      }}> Click to change the title
    </button>
    <Header title={title}></Header>

      {/* Any component is actually a function and is called everytime a parent is re rendered */}
      {/* we want to minimise the number of rerenders */}
      {/* To avoid rerendering we use memoization, refer Header.jsx */}

      {/* <HeaderWithButton /> */}
      <Header title="Title2"></Header>
      <Header title="Title2"></Header>
      <Header title="Title2"></Header>
      <Header title="Title2"></Header>
      <Header title="Title2"></Header>
      
    </div>
  )
}


// You can use a different function than App to avoid re-rendering or use memoization

// function HeaderWithButton(){
//   const [title,setTitle] = useState("My name is Ripudaman");
//   return(
//     <>
//     <button onClick={function(){
//     setTitle("My name is "+Math.random());
//     }}>Click to change the title
//     </button>
//     <Header title={title}></Header>
//     </>
//   )
  

// }

export default App
