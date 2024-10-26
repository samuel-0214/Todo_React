import { useState } from 'react';
import './App.css';
import { Task } from './Task'

function App() {

  const [todoList,setTodos] = useState([]);

  const [newTask,setNewTask] = useState("");

  const handleChange = (events) => {
    setNewTask(events.target.value);
  };

  const addList = () => {
    const task = {
      id:todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName : newTask,
      completed : false,
    };
    setTodos([...todoList,task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodos(todoList.filter((todos) =>  todos.id !== id));
  };

  const comButton = (id) => {
    setTodos(todoList.map((task)=>{
      if (task.id === id){
        return {...task,completed : true};
      }else{
        return task
      }
    }))
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} className='input'/>
        <button onClick={addList} className='button'>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((todos) => {
          return <Task taskName={todos.taskName} 
                      id={todos.id} 
                      completed = {todos.completed}
                      deleteTask={deleteTask} 
                      comButton={comButton}/>
        })}
      </div>
    </div>
  );
}


export default App;
