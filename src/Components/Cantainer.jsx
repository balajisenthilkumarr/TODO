import TodoCont from "./TodoCont";

function Cantainer({task,deleteTask}) {
  return (
    <div className="Container">
      {task.map((data,index)=>{
         return (
          <TodoCont  todo={data} index={index} deleteTask={deleteTask}/>
        )
      })}
    </div>
  );
}

export default Cantainer;