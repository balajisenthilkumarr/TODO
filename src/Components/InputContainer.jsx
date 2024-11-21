import React from 'react'

function InputContainer({inputVal,writeToDo,addTask}) {
  return (
    <div className="input_Container" >
      <input type="text" placeholder="Enter a Todo" value={inputVal} onChange={writeToDo}/>
      <button onClick={addTask}>+</button>
    </div>

  )
}

export default InputContainer