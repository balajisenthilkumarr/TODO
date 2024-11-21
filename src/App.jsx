import { useState } from "react"
import "./App.css"
import Cantainer from "./Components/Cantainer"
import InputContainer from "./Components/InputContainer"
function App() {

    const [inputVal,setInputVal]=   useState("")
    const[task,setTask]=useState([])
    function writeToDo(e)
    {
      setInputVal(e.target.value)
     
    }
    function addTask()
    {
         if(inputVal!='')
              setTask((array=>[...array,inputVal]))
            setInputVal('');
         
    }
    function deleteTask(deleteIndex) {
       setTask((prevTodos) => 
          prevTodos.filter((prevTodos, index) => index !== deleteIndex)
      );
     
  }
  

  return (
    <>
    <h1>To Do List</h1> 
    <InputContainer inputVal={inputVal} writeToDo={writeToDo} addTask={addTask}/>
    <Cantainer task={task} deleteTask={deleteTask}/>
    </>
  )
}

export default App
