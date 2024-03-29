import './WeekRoutine.css'

const WeekRoutine = () => {

    let monday = JSON.parse(localStorage.getItem("monday"))
    let tuesday = JSON.parse(localStorage.getItem("tuesday"))
    let wednesday = JSON.parse(localStorage.getItem("wednesday"))
    let thursday = JSON.parse(localStorage.getItem("thursday"))
    let friday = JSON.parse(localStorage.getItem("friday"))
    let saturday = JSON.parse(localStorage.getItem("saturday"))
    let sunday = JSON.parse(localStorage.getItem("sunday"))

    console.log(monday)
    console.log(tuesday)
    console.log(wednesday)
    console.log(thursday)
    console.log(friday)
    console.log(saturday)
    console.log(sunday)
    
    


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
                <td>{monday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{tuesday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{wednesday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{thursday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{friday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{saturday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
                <td>{sunday.meditation ? <i className="bi bi-check-lg meditation"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Treino / Alongamento</th>
                <td>{monday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{tuesday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{wednesday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{thursday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{friday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{saturday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
                <td>{sunday.workout ? <i className="bi bi-check-lg workout"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Estudo / Prática</th>
                <td>{monday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{tuesday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{wednesday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{thursday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{friday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{saturday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
                <td>{sunday.study ? <i className="bi bi-check-lg study"></i> : <></> }</td>
            </tr>
            <tr>
                <th>Currículo / LinkedIn</th>
                <td>{monday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{tuesday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{wednesday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{thursday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{friday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{saturday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
                <td>{sunday.linkedin ? <i className="bi bi-check-lg linkedin"></i> : <></> }</td>
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