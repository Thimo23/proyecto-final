import React from 'react'
import './TaskDetail.css'
import { helperDate } from '../helpers/helperDate'

const TaskDetail = ({
  title,
  date,
  completed,
  handleDelete,
  handleUpdate,
  handleComplete
}) => {
  const { dateArr, day, month, year } = helperDate(date)

  return (
    <div className='task'>
      <h3 className='task__title'>{title}</h3>
      <p className='task__date'>creado {`${day(dateArr)}-${month(dateArr)}-${year(dateArr)}`}</p>
      {completed ? (
        <button className='task__button task__button-eliminate' onClick={handleDelete}>Eliminar</button>
      ) : (
        <div className='task__buttons'>
          <button className='task__button task__button-completed' onClick={handleComplete}>Completar</button>
          <button className='task__button task__button-update' onClick={handleUpdate}>Actualizar</button>
          <button className='task__button task__button-eliminate' onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  )
}

export default TaskDetail
