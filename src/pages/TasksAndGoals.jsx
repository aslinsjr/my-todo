import { useState, useLayoutEffect } from 'react'

import TasksInput from '../components/TasksInput'

const TasksAndGoals = () => {

  const [taskList, setTaskList] = useState([{id: 1}, {id: 2}])

  function handleClick(e) {
    if (e.target.value === "+") {
      setTaskList(prevList => [...prevList, {id: taskList.length + 1}])

    } else {
      setTaskList(taskList.slice(0, taskList.length -1))
    }
    
  }

  function handleSubmit(e) {
    e.preventDefault(e)

    let taskArray = []

    taskList.forEach((task) => {

      const taskObject = {
        id: task.id,
        name: document.querySelector(`#inputTask${task.id}`).value,
        type: document.querySelector(`#inputTypeSelect${task.id}`).value,
        ifLista: document.querySelector(`#inputType${task.id}`).value
      }

      taskArray.push(taskObject)

    })

    localStorage.setItem("taskArray", JSON.stringify(taskArray))

    window.location.href = window.location.href.replace("tasks", "")

  }

  useLayoutEffect(() => {
    if (localStorage.getItem("taskArray")) {
      setTaskList(JSON.parse(localStorage.getItem("taskArray")))
  }
  }, [])

  return (
    <div className='container'>
      <TasksInput handleClick={handleClick} taskList={taskList} handleSubmit={handleSubmit} />
    </div>
  )
}

export default TasksAndGoals
