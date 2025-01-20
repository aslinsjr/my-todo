import './GoalsComponent.css'

const GoalsComponent = () => {

    return (
        <div className="goals-container">
            {localStorage.getItem("weekGoals") ? JSON.parse(localStorage.getItem("weekGoals")).map((task) => {
                if (task.lista) {
                    return (
                        <h2>{task.name}: <span>{task.lista}</span></h2>
                    )
                }
                if (task.frequencia) {
                    return (
                        <h2>{task.name}: <span>{task.frequencia}x na semana</span></h2>
                    )
                }
                if (task.valor) {
                    return (
                        <h2>{task.name}: <span>R$ {task.valor}</span></h2>
                    )
                }
            }): <></>}
        </div>
    )
}

export default GoalsComponent