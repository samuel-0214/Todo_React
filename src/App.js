import { useState } from 'react';
import './App.css';

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
    };
    setTodos([...todoList,task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodos(todoList.filter((todos) =>  todos.id !== id));
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} className='input'/>
        <button onClick={addList} className='button'>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((todos) => {
          return <div className='task'><h2>{todos.taskName} <button onClick={() => deleteTask(todos.id)}>x</button></h2></div>
        })}
      </div>
    </div>
  );
}


export default App;
