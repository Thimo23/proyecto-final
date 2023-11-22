import React from 'react'
import {useForm} from 'react-hook-form'
import './TaskForm.css'

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
      <form className={isEdit ? 'form--update' : 'form'} onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          className={isEdit ? 'form__input--update' : 'form__input'}
          placeholder='Tarea nueva'
          {...register('task', {
            required: {value: true, message: 'El campo Tarea es requerida'},
            minLength: {
              value: 3,
              message: 'La tarea debe tener minimo 3 caracteres'
            },
            maxLength: {
              value: 20,
              message: 'La tarea no debe tener mas de 20 caracteres'
            }
          })}
        />
        {errors.task && <span className='form__error'>{errors.task.message}</span>}

        <input type='submit' value={isEdit ? 'Actualizar' : 'Agregar'} />
      </form>
    </>
  )
}

export default TaskForm
