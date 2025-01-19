import './NavBar.css'

import { Link } from 'react-router-dom'

import { useState, useLayoutEffect } from 'react'

import ClockComponent from './ClockComponent'

const NavBar = () => {

  const [scheme, setScheme] = useState()

  function handleChangeSchema() {
    if (scheme === "dark") {
      document.querySelector(":root").classList.remove("dark")
      document.querySelector(":root").classList.add("light")
      document.querySelector(":root").style.colorScheme = "light"
      setScheme("light")
    } else {
      document.querySelector(":root").classList.remove("light")
      document.querySelector(":root").classList.add("dark")
      document.querySelector(":root").style.colorScheme = "dark"
      setScheme("dark")
    }
    
  }

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setScheme("dark")
    }
  }, [])

    return (
      <nav>
        <Link to={"/"}>Quadro Semanal</Link>
        <Link to={"/tasks"}>Criar Rotina</Link>
        <Link to={"/history"}>Histórico</Link>
        <Link to={"/edit"}>Editar Tarefas</Link>
        <ClockComponent />
        <button onClick={() => handleChangeSchema()}><img src={scheme === "dark" ? "./sol.png" : "./lua.png"} alt="" /></button>
      </nav>
    )
  }

  export default NavBar