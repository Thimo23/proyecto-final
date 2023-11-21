import { useState } from "react"

const useTask = (deleteTask, id, completeTask) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleDelete = () => deleteTask(id)

    const handleUpdate = () => setIsEdit(!isEdit)

    const handleComplete = () => completeTask(id)

    return { isEdit, handleDelete, handleUpdate, handleComplete }
}

export default useTask
