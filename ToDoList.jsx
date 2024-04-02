import { useState } from "react";

function ToDoList(){
    const [tasks, setTasks]=useState(["wake up", "eat", "code"]);
    const [newTask, setNewTask]=useState();

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        setTasks(t => [...t, newTask]);
    }

    function handleRemoveTask(index){
        setTasks(tasks.filter((_,i) => i!==index));
    }

    function handleMoveTaskUp(index){
        if(index>0)
        {
            const updatedTasks=[...tasks];
            [updatedTasks[index-1], updatedTasks[index]]=[updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
    }

    function handleMoveTaskDown(index){
        if(index<tasks.length-1)
        {
            const updatedTasks=[...tasks];
            [updatedTasks[index+1], updatedTasks[index]]=[updatedTasks[index], updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
            <h1>To Do List:</h1>
            <div className="to-do-container">
                <input type="text" placeholder="enter task"  id="add-task" onChange={handleInputChange} />
                <button className="add-btn" onClick={handleAddTask}>add</button>
            </div>
            <ul>
                {tasks.map((task,index) => 
                <li key={index}><span className="list-text">{task}</span>
                <button className="del-btn" onClick={() => handleRemoveTask(index)}>del </button>
                <button className="up-btn" onClick={() => handleMoveTaskUp(index)}>up</button>
                <button className="down-btn" onClick={()=> handleMoveTaskDown(index)}>down</button>
                </li>)}
            </ul>
        </>
    );
}

export default ToDoList;