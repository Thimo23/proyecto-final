import React from 'react'
import Task from './Task'
import './Tasks.css'

const Tasks = ({
  tasks,
  deleteTask,
  updateTask,
  completeTask,
  showCompleted
}) => {
  const tasksCompleted = (value) => {
    const tasksCompleted = tasks.filter((task) => task.completed)
    const taskActive = tasks.filter((task) => !task.completed)

    return value ? tasksCompleted : taskActive
  }

  return (
    <div className='tasks'>
      <h2 className='tasks__title'>Tareas {showCompleted && 'Completadas'}</h2>
      {tasksCompleted(showCompleted).length === 0 && <p className='tasks__empty'>No hay tareas</p>}
      {tasksCompleted(showCompleted).map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  )
}

export default Tasks
