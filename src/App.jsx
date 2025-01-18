import { useState, useLayoutEffect } from 'react'

import WeekRoutine from './components/WeekRoutine'
import MissionInput from './components/MissionInput'
import GoalsComponent from './components/GoalsComponent'
import NavBar from './components/NavBar'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
