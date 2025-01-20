import './RoutinrHistory.css'

const RoutineHistory = () => {

  const dayArray = ["01", "02", "03", "04", "05", "06", "07"]

  return (
    <div className='container routine-history'>
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
          {localStorage.getItem("taskArray") ? JSON.parse(localStorage.getItem("taskArray")).map((task) => {
            return (
              <tr>
                <th>{task.name}</th>
                {dayArray.map((day) => {

                  if (task.type !== "valor") {
                    return (
                      <td >{localStorage.getItem((task.name).toLowerCase().split(" ").join("") + day)}</td>
                    )
                  } else {
                    return (
                      <td>{localStorage.getItem((task.name).toLowerCase().split(" ").join("") + day) ? "R$ " + localStorage.getItem((task.name).toLowerCase().split(" ").join("") + day) : ""}</td>
                    )
                  }
                })}
              </tr>
            )
          }) : <></>}
        </tbody>
      </table>
    </div>
  )
}

export default RoutineHistory