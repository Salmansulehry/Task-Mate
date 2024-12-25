import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [task, setTask] = useState({});
  return (
    <div className="container">
    <Header />
    <AddTask taskList={taskList} setTaskList={setTaskList} task= {task} setTask= {setTask} />
    <ShowTask taskList={ taskList } setTaskList= { setTaskList } task= {task} setTask= {setTask} />
    </div>
  )
}

export default App
