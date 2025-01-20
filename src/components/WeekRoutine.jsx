import './WeekRoutine.css'

import { useLayoutEffect, useState } from 'react'

const WeekRoutine = () => {

    const [taskArray, setTaskArray] = useState([])

    const [clicked, setClicked] = useState()

    const [value, setValue] = useState()
    const [valueNumber, setValueNumber] = useState()

    const dayArray = ["01", "02", "03", "04", "05", "06", "07"]

    function normalizeProp(prop) {
        const normalized = prop.toLowerCase().split(" ").join("")

        return normalized
    }

    function handleClick(e) {

        if (e.target.innerHTML !== "✅") {
            e.target.innerHTML = "✅"
            localStorage.setItem(e.target.id, "✅")

        } else {
            e.target.innerHTML = ""
            localStorage.setItem(e.target.id, "")

        }

    }

    function handleClickValue(e) {
        setValue(e.target.id)
        setClicked(true)
    }

    function handleChangeValue(e) {
        setValueNumber(e.target.value)

    }

    function handleSubmitValue(e) {
        e.preventDefault()

        localStorage.setItem(value, valueNumber)
        setClicked(false)
    }

    useLayoutEffect(() => {
        if (localStorage.getItem("taskArray")) {
            setTaskArray(JSON.parse(localStorage.getItem("taskArray")))

        }

    }, [])

    return (
        <div className='week-routine'>
            <h2>Rotina</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Semana:</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                    {taskArray ? taskArray.map((task) => {
                        return (
                            <tr>
                                <th>{task.name}</th>
                                {dayArray.map((day) => {

                                    if (task.type !== "valor") {
                                        return (
                                            <td id={normalizeProp(task.name) + day} onClick={(e) => handleClick(e)}>{localStorage.getItem(normalizeProp(task.name) + day)}</td>
                                        )
                                    } else {
                                        return (
                                            <td id={normalizeProp(task.name) + day} onClick={(e) => handleClickValue(e)}>{localStorage.getItem(normalizeProp(task.name) + day) ? "R$ " + localStorage.getItem(normalizeProp(task.name) + day) : ""}</td>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    }) : <></>}
                </tbody>
            </table>
            {clicked ? <div className="background-modal">
                <form onSubmit={(e) => handleSubmitValue(e)}>
                    <label>Informe o valor do dia:
                        <input id={value} onChange={(e) => handleChangeValue(e)} type="text" />
                    </label>
                    <input type="submit" />
                </form>
            </div> : <></>}
        </div>
    )
}

export default WeekRoutine