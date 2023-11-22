import React from 'react'
import TaskForm from './TaskForm'
import TaskDetail from './TaskDetail'
import useTask from '../hooks/useTask'


const Task = ({task, deleteTask, updateTask, completeTask}) => {
  const {title, completed, id} = task

  const {isEdit, handleDelete, handleUpdate, handleComplete} = useTask(
    deleteTask,
    id,
    completeTask
  )

  return (
    <>
      {isEdit ? (
        <TaskForm
          method={updateTask}
          isEdit = {true}
          taskToEdit={task}
          handleUpdate={handleUpdate}
        />
      ) : (
        <TaskDetail
          title={title}
          completed={completed}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleComplete={handleComplete}
        />
      )}
    </>
  )
}

export default Task
