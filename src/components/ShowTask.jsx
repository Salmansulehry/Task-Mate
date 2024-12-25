import React, { useEffect } from 'react'

const ShowTask = ({taskList, setTaskList, task, setTask}) => {

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList));
  }, [taskList])

  const handleTaskDelete = (id) => {
    const DeleteTask = taskList.filter(task => task.id !== id);
    setTaskList(DeleteTask);
  }

  const updateTask = (id) => {
    const updateTask = taskList.find(task => task.id === id);
    setTask(updateTask);
  }

  return (
    <section className='showTask'>
      <div className="head">
        <span>
          <span className='title'>Todo</span>
          <span className="count">{ taskList.length }</span>
        </span>
        <span className="clearAll" onClick={() => setTaskList([])}>Clear All</span>
      </div>
      <ul>
        {taskList.map((task) =>(
          <li key={task.id}>
            <p>
              <span className='name'>{ task.name }</span>
              <span className='time'>{ task.time }</span>
            </p>
            <i onClick={() => updateTask(task.id)} className='bi bi-pencil-square'></i>
            <i onClick={() => handleTaskDelete(task.id)} className='bi bi-trash'></i>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShowTask
