import './GoalsComponent.css'

import { useLayoutEffect, useState } from 'react'

const GoalsComponent = () => {

    const [listTasks, setListTasks] = useState()
    const [numberTasks, setNumberTasks] = useState()
    const [valueTasks, setValueTasks] = useState()

    useLayoutEffect(() => {
        if (localStorage.getItem("taskArray")) {
            setListTasks(localStorage.getItem("listPropArray").split(","))
            setNumberTasks(localStorage.getItem("numberPropArray").split(","))
            setValueTasks(localStorage.getItem("valuePropArray").split(","))
        }

    }, [])

    return (
        <div className="goals-container">
            {listTasks ? listTasks.map((listProp) => {
                if(listProp !== ""){
                return (
                    <h2>{listProp}: <span>{localStorage.getItem(listProp.toLowerCase())}</span></h2>
                )}
            }) : <></>}
            {numberTasks ? numberTasks.map((numberProp) => {
                if(numberProp !== ""){
                return (
                    <h2>{numberProp}: <span>{localStorage.getItem(numberProp.toLowerCase().split(" ").join(""))}x na semana</span></h2>
                )}
            }) : <></>}
            {valueTasks ? valueTasks.map((valueProp) => {
                if(valueProp !== ""){
                return (
                    <h2>{valueProp}: <span>R$ {localStorage.getItem(valueProp.toLowerCase().split(" ").join(""))}</span></h2>
                )}
            }) : <></>}
        </div>
    )
}

export default GoalsComponent