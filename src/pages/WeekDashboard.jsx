import "./WeekDashboard.css"

import WeekRoutine from "../components/WeekRoutine"
import GoalsComponent from "../components/GoalsComponent"

const WeekDashboard = () => {
  return (
    <div className="dashboard container">
      <WeekRoutine /> 
      <GoalsComponent />
    </div>
  )
}

export default WeekDashboard