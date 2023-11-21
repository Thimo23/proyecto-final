import React from 'react'

const TasksButtons = ({showCompleted, eliminateAllCompleted}) => {
  const handleOldShow = () => showCompleted(true)

  const handleShow = () => showCompleted(false)

  const handleOnClick = () => eliminateAllCompleted()

  return (
    <div>
      <div>
        <button onClick={handleShow}>Tareas</button>
        <button onClick={handleOldShow}>Tareas completadas</button>
      </div>
      <button onClick={handleOnClick}>Elimiar tareas completadas</button>
    </div>
  )
}

export default TasksButtons
