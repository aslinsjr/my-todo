import { useEffect, useState } from "react"

import "./ClockComponent.css"

const ClockComponent = ({ date }) => {

    const [time, updateTime] = useState(date)

   function getDay() {

    let day = ""

    switch (date.getDay()) {
        case 0: day = "Domingo";
            break;
        case 1: day = "Segunda";
            break;
        case 2: day = "Terça";
            break;
        case 3: day = "Quarta";
            break;
        case 4: day = "Quinta";
            break;
        case 5: day = "Sexta";
            break;
        case 6: day = "Sábado";
            break;
    }

    return day
   }

    useEffect(() => {
        const timer = setInterval(() => {
            updateTime(new Date());
        }, 1000);
        return () => clearInterval(timer)
    }, [])


    return (
        <div className="clock-container">
            <span>{getDay()} {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/{date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}/{date.getFullYear()}</span>
            <span>{time.toLocaleTimeString()}</span>
        </div>
    )
}

export default ClockComponent