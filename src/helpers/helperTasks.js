export const taskUpdated = (newTitle, task) => {
  const taskUpdate = {
    id: task.id,
    title: newTitle,
    completed: task.completed,
    date: task.date
  }
  return taskUpdate
}

export const taskCompleted = (task) => {
  const completedTask = {...task, completed: true}
  return completedTask
}
