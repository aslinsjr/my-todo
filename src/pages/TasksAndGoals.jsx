import { useState, useLayoutEffect } from 'react'

import { Link } from 'react-router-dom'

import TasksInput from '../components/TasksInput'
import MissionInput from '../components/MissionInput'

const TasksAndGoals = () => {

  const [listTasks, setListTasks] = useState()
  const [numberTasks, setNumberTasks] = useState()
  const [valueTasks, setValueTasks] = useState()

  const [tasks, setTasks] = useState(false)
  const [taskList, setTaskList] = useState([1, 2])

  function handleClick() {
    setTaskList(prevList => [...prevList, taskList[taskList.length - 1] + 1])

  }

  function handleSubmit(e) {
    e.preventDefault(e)

    let taskArray = []
    let listPropArray = []
    let numberPropArray = []
    let valuePropArray = []

    taskList.forEach((task) => {

      if (document.querySelector(`#inputTypeSelect${task}`).value === "lista" || document.querySelector(`#inputTypeSelect${task}`).value === "frequencia") {
        taskArray.push(document.querySelector(`#inputTask${task}`).value)
      }

      if (document.querySelector(`#inputTypeSelect${task}`).value === "lista") {
        listPropArray.push(document.querySelector(`#inputType${task}`).value)
      }

      if (document.querySelector(`#inputTypeSelect${task}`).value === "frequencia") {
        numberPropArray.push(document.querySelector(`#inputTask${task}`).value)
      }

      if (document.querySelector(`#inputTypeSelect${task}`).value === "valor") {
        valuePropArray.push(document.querySelector(`#inputTask${task}`).value)
      }

    })

    localStorage.setItem("taskArray", taskArray)

    setListTasks(listPropArray)
    localStorage.setItem("listPropArray", listPropArray)

    setNumberTasks(numberPropArray)
    localStorage.setItem("numberPropArray", numberPropArray)

    setValueTasks(valuePropArray)
    localStorage.setItem("valuePropArray", valuePropArray)

    setTasks(true)
  }

  function submitWeekGoals() {
    setTasks(false)

    // window.location.href = "http://localhost:5173/"
  }

  // useLayoutEffect(() =>{
  //   if (localStorage.getItem("weekGoals")) {
  //     setTasks(localStorage.getItem("weekGoals"))
  //     setListTasks(localStorage.getItem("listPropArray").split(","))
  //     setNumberTasks(localStorage.getItem("numberPropArray").split(","))
  //     setValueTasks(localStorage.getItem("valuePropArray").split(","))
  //   }
  // })

  return (
    <div className='container'>
      {tasks ? <MissionInput submitWeekGoals={submitWeekGoals} listTasks={listTasks} numberTasks={numberTasks} valueTasks={valueTasks} /> :
        <TasksInput handleClick={handleClick} taskList={taskList} handleSubmit={handleSubmit} />}
    </div>
  )
}

export default TasksAndGoals
