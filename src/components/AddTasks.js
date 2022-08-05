import TaskForm from "./TaskForm";
import styles from './AddTasks.module.css';
import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
const AddTasks=(props)=>{
   
    const{error ,isLoading , sendRequest:sendTask}=useHttp();

    const createTask = (taskText,taskData)=>{
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }
  
    const enteredTask =(task) =>{
      sendTask({
        url:'https://addtasks-62bbc-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { text:task },
        headers: {
          'Content-Type': 'application/json',
    }
      },createTask.bind(null, task))};


    
    return  <div className={styles.container}>
                <TaskForm enteredTask={enteredTask}
                loading={isLoading}/>
                {error && <p>{error}</p>}
            </div>
}
export default AddTasks;