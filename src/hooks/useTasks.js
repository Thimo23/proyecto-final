import {useState} from 'react'

const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [isShowCompleted, setIsShowCompleted] = useState(false)

  const createTask = (data, id) => {
    const task = {
      title: data.task,
      id,
      completed: false
    }

    const newTasks = [...tasks]
    newTasks.push(task)

    setTasks(newTasks)
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks]

    setTasks(newTasks.filter((task) => task.id !== id))
  }

  const updateTask = (data, id) => {
    const updateTasks = [...tasks]
    setTasks(
      updateTasks.map((task) =>
        task.id === id ? taskUpdated(data.task, task) : task
      )
    )
  }

  const taskUpdated = (newTitle, task) => {
    const taskUpdate = {id: task.id, title: newTitle, completed: false}
    return taskUpdate
  }

  const completeTask = (id) => {
    const updateTasks = [...tasks]
    setTasks(
      updateTasks.map((task) => (task.id !== id ? task : taskCompleted(task)))
    )
  }

  const taskCompleted = (task) => {
    task.completed = true
    return task
  }

  const showCompleted = (value) => setIsShowCompleted(value)

  const eliminateAllCompleted = () => {
    const tasksUpdated = [...tasks]
    setTasks(tasksUpdated.filter((task) => !task.completed))
  }

  return {
    tasks,
    isShowCompleted,
    createTask,
    deleteTask,
    updateTask,
    completeTask,
    showCompleted,
    eliminateAllCompleted
  }
}

export default useTasks
