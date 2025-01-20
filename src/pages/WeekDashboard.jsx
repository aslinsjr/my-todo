import "./WeekDashboard.css"

import { useState, useLayoutEffect } from "react"

import WeekRoutine from "../components/WeekRoutine"
import GoalsComponent from "../components/GoalsComponent"
import MissionInput from "../components/MissionInput"

const WeekDashboard = () => {

  const [goals, setGoals] = useState(false)

  const date = new Date()

  function handleSubmit(e) {
    e.preventDefault()

    let goalsArray = JSON.parse(localStorage.getItem("taskArray")).map((task) =>{
      if (task.type === "lista") {
        return {
          name: task.name,
          lista: document.querySelector(`#${task.ifLista.toLowerCase().split(" ").join("")}`).value
        }
      } else if (task.type === "frequencia") {
        return {
          name: task.name,
          frequencia: document.querySelector(`#${task.name.toLowerCase().split(" ").join("")}`).value
        }
      } else {
        return {
          name: task.name,
          valor: document.querySelector(`#${task.name.toLowerCase().split(" ").join("")}`).value
        }
      }
    })

    setGoals(false)
    localStorage.setItem("weekGoals", JSON.stringify(goalsArray))
  }

  useLayoutEffect(() => {
    if (!localStorage.getItem("taskArray")) {
      window.location.href = window.location.href + "tasks"
    }

    if (date.getDay() >= 1 && !localStorage.getItem("weekGoals")) {
      setGoals(true)
    }

  }, [])

  return (
    <div className="dashboard container">
      {goals && localStorage.getItem("taskArray") ? <MissionInput handleSubmit={handleSubmit} /> : <></>}
      <WeekRoutine /> 
      <GoalsComponent />
    </div>
  )
}

export default WeekDashboard