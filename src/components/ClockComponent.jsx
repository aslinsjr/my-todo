import { useEffect, useState } from "react"

import "./ClockComponent.css"

const ClockComponent = () => {

    const date = new Date()

    const [time, updateTime] = useState(date)

    function getDay() {

        let day = ""

        switch (date.getDay()) {
            case 0: day = "Domingo";
                break;
            case 1: day = "Segunda-feira";
                break;
            case 2: day = "Terça-feira";
                break;
            case 3: day = "Quarta-feira";
                break;
            case 4: day = "Quinta-feira";
                break;
            case 5: day = "Sexta-feira";
                break;
            case 6: day = "Sábado";
                break;
        }

        return day
    }

    function timer() {
        setInterval(() => {
            updateTime(new Date());
        }, 1000);

        return () => clearInterval(timer)
    }

    useEffect(() => {
        timer()

        // if (date.getDay() === 1) {
        //     localStorage.setItem("weekGoals", false)
        // }

    }, [])


    return (
        <div className="clock-container">
            <div className="date-container"><span>{getDay()}</span> <span>{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/{date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}/{date.getFullYear()}</span></div>
            <span id="clock">{time.toLocaleTimeString()}</span>
        </div>
    )
}

export default ClockComponent