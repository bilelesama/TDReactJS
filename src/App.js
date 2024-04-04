import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList/TaskList';
import TaskForm from './Components/TaskForm/TaskForm';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { name: newTask, completed: false }]);
};

const toggleTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};

  return (
    <div className="App">
      <div className='container'>
<div className='row'>

      <TaskForm  addTask={addTask}/>
</div>
      <TaskList toggleTask={toggleTask}  tasks={tasks}  />
      </div>
    </div>
  );
}

export default App;
