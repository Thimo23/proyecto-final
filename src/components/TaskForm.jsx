import React from 'react'
import {useForm} from 'react-hook-form'

const TaskForm = ({method, isEdit, taskToEdit, handleUpdate}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({defaultValues: {task: isEdit ? taskToEdit.title : ''}})

  const onSubmit = (data) => {
    method(data, isEdit ? taskToEdit.id : crypto.randomUUID())
    reset()
    if (isEdit) handleUpdate()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Tarea nueva'
          {...register('task', {
            required: {value: true, message: 'El campo Tarea es requerida'},
            minLength: {
              value: 3,
              message: 'La tarea debe tener minimo 3 caracteres'
            }
          })}
        />
        {errors.task && <span>{errors.task.message}</span>}

        <input type='submit' value={isEdit ? 'Actualizar' : 'Agregar tarea'} />
      </form>
    </>
  )
}

export default TaskForm
