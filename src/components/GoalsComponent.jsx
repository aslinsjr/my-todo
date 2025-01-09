import './GoalsComponent.css'

const GoalsComponent = () => {

    return (
        <div className="goals-container">
            <h2>Livros: <span>{localStorage.getItem("book-list")}</span></h2>
            <h2>Aulas: <span>{localStorage.getItem("classes-list")}</span></h2>
            <h2>Projetos: <span>{localStorage.getItem("projects-list")}</span></h2>
            <h2>Inglês: <span>{localStorage.getItem("english")}x na semana</span></h2>
            <h2>Espanhol: <span>{localStorage.getItem("espanhol")}x na semana</span></h2>
            <h2>Bateria: <span>{localStorage.getItem("drums")}x na semana</span></h2>
        </div>
    )
}

export default GoalsComponent