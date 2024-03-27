import './WeekRoutine.css'

const WeekRoutine = () => {

    let monday = JSON.parse(localStorage.getItem("monday"))
    let tuesday = JSON.parse(localStorage.getItem("tuesday"))
    let wednesday = JSON.parse(localStorage.getItem("wednesday"))
    let thursday = JSON.parse(localStorage.getItem("thursday"))
    let friday = JSON.parse(localStorage.getItem("friday"))
    let saturday = JSON.parse(localStorage.getItem("saturday"))
    let sunday = JSON.parse(localStorage.getItem("sunday"))

    console.log(tuesday)


  return (
    <div>
        <h2>Quadro de Rotina</h2>
        <table>
            <tr>
                <th>Semana:{""}</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
                <th>Sábado</th>
                <th>Domingo</th>
            </tr>
            <tr>
                <th>Meditação / Leitura</th>
                <td><i className="bi bi-check-lg meditation" style={monday.meditation ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg meditation" style={tuesday.meditation ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg meditation" style={wednesday.meditation ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg meditation" style={thursday.meditation ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg meditation" style={friday.meditation ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg meditation" style={saturday.meditation ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg meditation" style={sunday.meditation ? {display: "flex"} : {}}></i></td>
            </tr>
            <tr>
                <th>Treino / Alongamento</th>
                <td><i className="bi bi-check-lg workout" style={monday.workout ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg workout" style={tuesday.workout ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg workout" style={wednesday.workout ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg workout" style={thursday.workout ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg workout" style={friday.workout ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg workout" style={saturday.workout ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg workout" style={sunday.workout ? {display: "flex"} : {}}></i></td>
            </tr>
            <tr>
                <th>Estudo / Prática</th>
                <td><i className="bi bi-check-lg study" style={monday.study ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg study" style={tuesday.study ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg study" style={wednesday.study ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg study" style={thursday.study ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg study" style={friday.study ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg study" style={saturday.study ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg study" style={sunday.study ? {display: "flex"} : {}}></i></td>
            </tr>
            <tr>
                <th>Currículo / LinkedIn</th>
                <td><i className="bi bi-check-lg linkedin" style={monday.linkedin ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg linkedin" style={tuesday.linkedin ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg linkedin" style={wednesday.linkedin ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg linkedin" style={thursday.linkedin ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg linkedin" style={friday.linkedin ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg linkedin" style={saturday.linkedin ? {display: "flex"} : {}}></i></td>
                <td><i className="bi bi-check-lg linkedin" style={sunday.linkedin ? {display: "flex"} : {}}></i></td>
            </tr>
            <tr>
                <th>Renda Variável</th>
                <td><p className='extra-cash'>{monday.extraCash}</p></td>
                <td><p className='extra-cash'>{tuesday.extraCash}</p></td>
                <td><p className='extra-cash'>{wednesday.extraCash}</p></td>
                <td><p className='extra-cash'>{thursday.extraCash}</p></td>
                <td><p className='extra-cash'>{friday.extraCash}</p></td>
                <td><p className='extra-cash'>{saturday.extraCash}</p></td>
                <td><p className='extra-cash'>{sunday.extraCash}</p></td>
            </tr>
        </table>
    </div>
  )
}

export default WeekRoutine