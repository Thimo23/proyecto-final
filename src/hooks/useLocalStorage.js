import {useState, useEffect} from 'react'

const useLocalStorageTasks = (key, initialValue) => {
  const storedValue = localStorage.getItem(key)

  const [tasks, setTasks] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks))
  }, [key, tasks])

  return [tasks, setTasks]
}

export default useLocalStorageTasks
