import React from 'react'

const TaskDetail = ({
  title,
  completed,
  handleDelete,
  handleUpdate,
  handleComplete
}) => {
  return (
    <div>
      <p>{title}</p>
      {completed ? (
        <button onClick={handleDelete}>Eliminar</button>
      ) : (
        <div>
          <button onClick={handleComplete}>Completar</button>
          <button onClick={handleUpdate}>Actualizar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  )
}

export default TaskDetail
