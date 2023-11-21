import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import TasksButtons from './components/TasksButtons';
import useTasks from './hooks/useTasks';
import useLocalStorageTasks from './hooks/useLocalStorage';
function App() {
  
  const [localStorageTasks, setLocalStorageTasks] = useLocalStorageTasks('tasks', []);
  const {
    tasks,
    isShowCompleted,
    createTask,
    deleteTask,
    updateTask,
    completeTask,
    showCompleted,
    eliminateAllCompleted
  } = useTasks(localStorageTasks, setLocalStorageTasks); 

  return (
    <div>
      <TaskForm method={createTask} isEdit={false} />

      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        completeTask={completeTask}
        showCompleted={isShowCompleted}
      />

      <TasksButtons
        showCompleted={showCompleted}
        eliminateAllCompleted={eliminateAllCompleted}
      />
    </div>
  );
}

export default App;
