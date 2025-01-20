import './MissionInput.css'

const MissionInput = ({ handleSubmit }) => {

  return (
    <div className="background-modal">
      <div className='mission-input-container'>
        <h2>Metas da semana</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {localStorage.getItem("taskArray") ? JSON.parse(localStorage.getItem("taskArray")).map((task) => {
            if (task.type === "lista") {
              return (
                <label>{task.ifLista}:
                  <input id={task.ifLista.toLowerCase().split(" ").join("")} type="text" placeholder="insira os nomes dos itens separados por vírgula" />
                </label>
              )
            }
            if (task.type === "frequencia") {
              return (
                <label id={task.name}>{task.name}:
                  <input id={task.name.toLowerCase().split(" ").join("")} type="number" placeholder='1-7 vezes na semana' />
                </label>
              )
            }
            if (task.type === "valor") {
              return (
                <label id={task.name}>{task.name}:
                  <input name={task.name} id={task.name.toLowerCase().split(" ").join("")} type="text" placeholder='R$' />
                </label>
              )
            }
          }) : <></>}
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default MissionInput