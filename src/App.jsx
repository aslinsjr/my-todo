import { useState } from 'react'

import WeekRoutine from './assets/components/WeekRoutine'
import RoutineInput from './assets/components/RoutineInput'
import AddButton from './assets/components/AddButton'
import MissionsComponent from './assets/components/MissionsComponent'
import MissionButton from './assets/components/MissionButton'
import MissionInput from './assets/components/MissionInput'

import './App.css'

function App() {

  const date = new Date()

  class Routine {
    constructor(meditation, workout, linkedin, study, extraCash) {
      this.meditation = meditation;
      this.workout = workout;
      this.linkedin = linkedin;
      this.study = study;
      this.extraCash = extraCash;
    }
  }

  const [click, setClick] = useState(false)
  const [actualDay, setActualDay] = useState(date.getDay())

  const [meditation, setMeditation] = useState(false)
  const [workout, setWorkout] = useState(false)
  const [linkedin, setLinkedin] = useState(false)
  const [study, setStudy] = useState(false)
  const [extraCash, setExtraCash] = useState(0)

  // const [monday, setMonday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  // const [tuesday, setTuseday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  // const [wednesday, setWednesday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  // const [thursday, setThursday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  // const [friday, setFriday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  // const [saturday, setSaturday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  // const [sunday, setSunday] = useState(new Routine(meditation, workout, linkedin, study, extraCash))
  
  function handleClick(e) {
    e.preventDefault()

    if(e.target.id === "missions-btn") {
      // setClick(true)
    }

    if(e.target.id === "add-btn") {
      setClick(true)
    }

    if(e.target.id === "submit-btn") {

      if(actualDay == 1) {
        let monday = new Routine(meditation, workout, linkedin, study, extraCash)
        localStorage.setItem("monday", JSON.stringify(monday))
      }

      if(actualDay == 2) {
        let tuesday = new Routine(meditation, workout, linkedin, study, extraCash)
        localStorage.setItem("tuesday", JSON.stringify(tuesday))
      }

      if(actualDay == 3) {
        let wednesday = new Routine(meditation, workout, linkedin, study, extraCash)

        localStorage.setItem("wednesday", JSON.stringify(wednesday))
      }

      if(actualDay == 4) {
        let thursday = new Routine(meditation, workout, linkedin, study, extraCash)

        localStorage.setItem("thursday", JSON.stringify(thursday))
      }

      if(actualDay == 5) {
        // setFriday(new Routine(meditation, workout, linkedin, study, extraCash))

        localStorage.setItem("friday", JSON.stringify(friday))
      }

      if(actualDay == 6) {
        // setSaturday(new Routine(meditation, workout, linkedin, study, extraCash))

        localStorage.setItem("saturday", JSON.stringify(saturday))
      }

      if(actualDay == 0) {
        // setSunday(new Routine(meditation, workout, linkedin, study, extraCash))

        localStorage.setItem("sunday", JSON.stringify(sunday))
      }

      setClick(false)
    }
  }

  function handleInput(e) {
    if(e.target.name === "meditation") {
      setMeditation(e.target.checked)
    }
    if(e.target.name === "workout") {
      setWorkout(e.target.checked)
    }
    if(e.target.name === "linkedin") {
      setLinkedin(e.target.checked)
    }
    if(e.target.name === "study") {
      setStudy(e.target.checked)
    }
    if(e.target.name === "extra-cash") {
      setExtraCash(e.target.value)
    }
  }

  return (
    <>
      <WeekRoutine/>
      <AddButton handleClick={handleClick}/>
      {click ? <RoutineInput actualDay={actualDay} handleClick={handleClick} handleInput={handleInput}/>  : ""}
      <MissionButton handleClick={handleClick}/>
      {/* {click ? <MissionInput handleInput={handleInput}/>  : ""} */}
      <MissionsComponent />
    </>
  )
}

export default App
