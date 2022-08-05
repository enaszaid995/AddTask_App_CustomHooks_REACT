import { useRef } from 'react';
import styles from './TaskForm.module.css';
const TaskForm=(props)=>{
    const taskInput =useRef();
    
    const SubmitHandler=event=>{
        event.preventDefault();
        const enteredValue = taskInput.current.value;
        if(enteredValue.trim().length > 0){
            props.enteredTask(enteredValue);
        }
    }
    return <form className={styles.form} method="POST" onSubmit={SubmitHandler}>
                <input type="text" 
                        placeholder="Add Task . . ."
                        ref={taskInput}/>
                <button>Add Task</button>
           </form>
}
export default TaskForm;