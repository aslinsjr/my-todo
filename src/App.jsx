import { useState, useLayoutEffect } from 'react'

import WeekRoutine from './components/WeekRoutine'
import MissionInput from './components/MissionInput'
import GoalsComponent from './components/GoalsComponent'

import './App.css'

function App() {

  const date = new Date()

  const [weekGoals, setWeekGoals] = useState(false)

  function submitWeekGoals() {
    setWeekGoals(true)
  }

  useLayoutEffect(() => {
    setWeekGoals(localStorage.getItem("week-goals"))

    if (date.getDay() === 1) {
      localStorage.clear()
    }
    
  },[])

  return (
    <div className='app'>
    <WeekRoutine />
    <GoalsComponent />
      {!weekGoals ? <MissionInput submitWeekGoals={submitWeekGoals}/> : <></>}
    </div>
  )
}

export default App
