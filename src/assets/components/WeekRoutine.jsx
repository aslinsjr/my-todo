import './WeekRoutine.css'

const WeekRoutine = () => {

    let monday = JSON.parse(localStorage.getItem("monday"))
    let tuesday = JSON.parse(localStorage.getItem("tuesday"))
    let wednesday = JSON.parse(localStorage.getItem("wednesday"))
    let thursday = JSON.parse(localStorage.getItem("thursday"))
    let friday = JSON.parse(localStorage.getItem("friday"))
    let saturday = JSON.parse(localStorage.getItem("saturday"))
    let sunday = JSON.parse(localStorage.getItem("sunday"))


  return (
    <div>
        <h2>Quadro de Rotina</h2>
        <table>
            <tbody>
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
                <td>{monday && monday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{tuesday && tuesday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{wednesday && wednesday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{thursday && thursday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{friday && friday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{saturday && saturday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{sunday && sunday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Treino / Alongamento</th>
                <td>{monday && monday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{tuesday && tuesday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{wednesday && wednesday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{thursday && thursday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{friday && friday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{saturday && saturday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{sunday && sunday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Estudo / Prática</th>
                <td>{monday && monday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{tuesday && tuesday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{wednesday && wednesday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{thursday && thursday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{friday && friday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{saturday && saturday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{sunday && sunday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Currículo / LinkedIn</th>
                <td>{monday && monday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{tuesday && tuesday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{wednesday && wednesday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{thursday && thursday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{friday && friday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{saturday && saturday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{sunday && sunday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Renda Variável</th>
                <td><p className='extra-cash'>{monday && monday.extraCash}</p></td>
                <td><p className='extra-cash'>{tuesday && tuesday.extraCash}</p></td>
                <td><p className='extra-cash'>{wednesday && wednesday.extraCash}</p></td>
                <td><p className='extra-cash'>{thursday && thursday.extraCash}</p></td>
                <td><p className='extra-cash'>{friday && friday.extraCash}</p></td>
                <td><p className='extra-cash'>{saturday && saturday.extraCash}</p></td>
                <td><p className='extra-cash'>{sunday && sunday.extraCash}</p></td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default WeekRoutine