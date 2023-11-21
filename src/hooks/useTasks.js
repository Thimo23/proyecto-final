import { useState } from 'react';

const useTasks = (initialTasks, setInitialTasks) => {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [isShowCompleted, setIsShowCompleted] = useState(false);

  const createTask = (data, id) => {
    const task = {
      title: data.task,
      id,
      completed: false
    };

    const newTasks = [...tasks, task];
    setTasks(newTasks);

    if (setInitialTasks) {
      setInitialTasks(newTasks);
    }
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);

    if (setInitialTasks) {
      setInitialTasks(newTasks);
    }
  };

  const updateTask = (data, id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? taskUpdated(data.task, task) : task
    );

    setTasks(updatedTasks);

    if (setInitialTasks) {
      setInitialTasks(updatedTasks);
    }
  };

  const taskUpdated = (newTitle, task) => {
    const taskUpdate = { id: task.id, title: newTitle, completed: task.completed };
    return taskUpdate;
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? taskCompleted(task) : task
    );

    setTasks(updatedTasks);

    if (setInitialTasks) {
      setInitialTasks(updatedTasks);
    }
  };

  const taskCompleted = (task) => {
    const completedTask = { ...task, completed: true };
    return completedTask;
  };

  const showCompleted = (value) => setIsShowCompleted(value);

  const eliminateAllCompleted = () => {
    const tasksUpdated = tasks.filter((task) => !task.completed);
    setTasks(tasksUpdated);

    if (setInitialTasks) {
      setInitialTasks(tasksUpdated);
    }
  };

  return {
    tasks,
    isShowCompleted,
    createTask,
    deleteTask,
    updateTask,
    completeTask,
    showCompleted,
    eliminateAllCompleted
  };
};

export default useTasks;
