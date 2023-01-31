import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName)
    )
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
