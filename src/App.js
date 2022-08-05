import './App.css';
import { Fragment, useState,useEffect } from 'react';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import useHttp from './hooks/use-http';

function App() {
  const [tasks , setTasks]=useState([]);

  const {error , isLoading , sendRequest:fetchTask}= useHttp();
  useEffect(()=>{
    const getData= tasks =>{
      const loadedTasks = [];
      for (const taskKey in tasks) {
        loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
      }
      console.log(loadedTasks)
    setTasks(loadedTasks);
    };
    fetchTask({url:'https://addtasks-62bbc-default-rtdb.firebaseio.com/tasks.json'},getData);
  },[fetchTask]);


  const taskAdd = task =>{
    setTasks(prevTask => prevTask.concat(task));
  }
  return (
    <Fragment>
      <AddTasks onAddTask={taskAdd}/>
      <Tasks tasks={tasks} 
      getData={fetchTask}
      error={error}
      isLoading={isLoading}/>
      
    </Fragment>
  );
}

export default App;
