import React from 'react'
import './TaskDetail.css'

const TaskDetail = ({
  title,
  completed,
  handleDelete,
  handleUpdate,
  handleComplete
}) => {
  return (
    <div className='task'>
      <p className='task__title'>{title}</p>
      {completed ? (
        <button onClick={handleDelete}>Eliminar</button>
      ) : (
        <div className='task__buttons'>
          <button className='task__button-completed' onClick={handleComplete}>Completar</button>
          <button className='task__button-update' onClick={handleUpdate}>Actualizar</button>
          <button className='task__button-eliminate' onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  )
}

export default TaskDetail
