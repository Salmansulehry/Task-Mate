import React from 'react'

const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    if(task.id){  //if we have an id we are in edit state
      const date = new Date();
      const updateTask = taskList.map((curr) => (
        curr.id === task.id ? {id: curr.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : curr
      ));
      setTaskList(updateTask);
      setTask({});

    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="Add Task" maxLength="50" onChange={event => setTask({...task, name: event.target.value})}/> 
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}

export default AddTask
