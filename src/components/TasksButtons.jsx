import React from 'react'
import './TasksButtons.css'

const TasksButtons = ({showCompleted, eliminateAllCompleted}) => {
  const handleOldShow = () => showCompleted(true)

  const handleShow = () => showCompleted(false)

  const handleOnClick = () => eliminateAllCompleted()

  return (
    <div className='buttons-container'>
      <div className='buttons-container__buttons'>
        <button className='buttons-container__active' onClick={handleShow}>Tareas</button>
        <button className='buttons-container__completed' onClick={handleOldShow}>Completadas</button>
      </div>
      <button className='buttons-container__eliminate' onClick={handleOnClick}>Elimiar tareas completadas</button>
    </div>
  )
}

export default TasksButtons
