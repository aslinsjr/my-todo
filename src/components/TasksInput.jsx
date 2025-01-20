import './TasksInput.css'

import { useEffect } from 'react'

const TasksInput = ({ handleClick, handleSubmit, taskList }) => {

    function handleChanges(e, task) {
        if (e.target.value === "lista") {
            document.querySelector(`#inputType${task.id}`).style.display = "flex"
        } else {
            document.querySelector(`#inputType${task.id}`).style.display = "none"
        }
    }

    function getValues() {
        taskList.forEach((task) => {
            if (task.name) {
                
                document.querySelector(`#inputTask${task.id}`).value = task.name

                if (task.type === "lista") {
                    document.querySelector(`#inputType${task.id}`).style.display = "flex"
                    document.querySelector(`#inputType${task.id}`).value = task.ifLista

                } else {
                    document.querySelector(`#inputType${task.id}`).style.display = "none"
                }
            }
        })
    }

    useEffect(() => {
        getValues()
    })

    return (
        <div className="task-input-container">
            <h2>Defina suas tarefas diárias <input type="button" value="+" onClick={(e) => handleClick(e)} /><input type="button" value="-" onClick={(e) => handleClick(e)} /></h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="tasks-container">
                    {taskList.map((task) => {
                        return (
                            <label key={`task-input-${task}`}>Tarefa:
                                <div id="input-control">
                                    <input name={`inputTask${task.id}`} id={`inputTask${task.id}`} type="text" />
                                    <select name={`inputTypeSelect${task.id}`} id={`inputTypeSelect${task.id}`} onChange={(e) => handleChanges(e, task)}>
                                        <option value="placeholder">Selecione o tipo</option>
                                        <option value="lista" selected={task.type === "lista" ? true : false} >Lista</option>
                                        <option value="frequencia" selected={task.type === "frequencia" ? true : false}>Frequência</option>
                                        <option value="valor" selected={task.type === "valor" ? true : false}>Valor</option>
                                    </select>
                                </div>
                                <input className='input-list' id={`inputType${task.id}`} name={`inputType${task.id}`} type='text' placeholder='insira o item da lista, ex: livros' />
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