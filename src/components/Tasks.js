
import TaskItem from './TaskItem';
import styles from './Tasks.module.css';
const Tasks=(props)=>{
    
    return <div className={styles.tasks}>
                
                <ul>{props.tasks.map(task =>{
                     return <TaskItem key={task.id} task={task}/>
                      })}
                </ul>
             </div>
}
export default Tasks;