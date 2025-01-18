import './TasksInput.css'

const TasksInput = ({ handleClick, handleSubmit, taskList }) => {

    function handleChanges(e, task) {
        if (e.target.value === "lista") {
            document.querySelector(`#inputType${task}`).style.display = "flex"
        } else {
            document.querySelector(`#inputType${task}`).style.display = "none"
        }
    }

    return (
        <div className="task-input-container">
            <h2>Defina suas tarefas diárias <input type="button" value="+" onClick={() => handleClick()} /></h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="tasks-container" style={taskList.length > 1 ? { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" } : {}}>
                    {taskList.map((task) => {
                        return (
                            <label key={`task-input-${task}`}>Tarefa:
                                <div id="input-control">
                                    <input name={`inputTask${task}`} id={`inputTask${task}`} type="text" />
                                    <select name={`inputTypeSelect${task}`} id={`inputTypeSelect${task}`} onChange={(e) => handleChanges(e, task)}>
                                        <option value="placeholder">Selecione o tipo</option>
                                        <option value="lista" >Lista</option>
                                        <option value="frequencia">Frequência</option>
                                        <option value="valor">Valor</option>
                                    </select>
                                </div>
                                <input className='input-list' id={`inputType${task}`} name={`inputType${task}`} type='text' placeholder='insira o item da lista, ex: livros' />
                            </label>
                        )
                    })}
                </div>
                <div className="input-control">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default TasksInput