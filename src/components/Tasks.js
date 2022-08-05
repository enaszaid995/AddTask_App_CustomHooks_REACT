import TaskItem from './TaskItem';
import styles from './Tasks.module.css';
const Tasks=(props)=>{
    let taskList = <h2>No tasks found. Start adding some!</h2>;
    if (props.tasks.length > 0) {
        taskList =
          <ul>
            {props.tasks.map((task) => (
              <TaskItem key={task.id}>{task.text}</TaskItem>
            ))}
          </ul>
        
      }
      let content = taskList;

      if (props.error) {
        content = <button onClick={props.getData}>Try again</button>;
      }
    
      if (props.isLoading) {
        content = 'Loading tasks...';
      }
    
    return <div className={styles.tasks}>
                {content}
             </div>
}
export default Tasks;