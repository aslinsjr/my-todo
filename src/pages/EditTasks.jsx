import './EditTasks.css'

const EditTasks = () => {

  function handleChanges(e, task) {
    if (e.target.value === "lista") {
      console.log(document.querySelector(`#inputType${task}`))
        document.querySelector(`#inputType${task.toLowerCase().split(" ").join("")}`).style.display = "flex"
    } else {
        document.querySelector(`#inputType${task.toLowerCase().split(" ").join("")}`).style.display = "none"
    }
}

  return (
    <div className='edit-tasks container'>
      {localStorage.getItem("taskArray") ? localStorage.getItem("taskArray").split(",").map((task) => {
        return (
          <label key={`task-input-${task}`}>Tarefa:
            <div id="input-control">
              <input name={`inputTask${task}`} id={`inputTask${task}`} type="text" placeholder={task} />
              <select name={`inputTypeSelect${task}`} id={`inputTypeSelect${task.toLowerCase().split(" ").join("")}`} onChange={(e) => handleChanges(e, task)}>
                <option value="placeholder">Selecione o tipo</option>
                <option value="lista" >Lista</option>
                <option value="frequencia">Frequência</option>
                <option value="valor">Valor</option>
              </select>
            </div>
            <input className='input-list' id={`inputType${task.toLowerCase().split(" ").join("")}`} name={`inputType${task}`} type='text' placeholder='insira o item da lista, ex: livros' />
          </label>
        )
      }) : <></>}
      {localStorage.getItem("valuePropArray") ? localStorage.getItem("valuePropArray").split(",").map((task) => {
        return (
          <label key={`task-input-${task}`}>Tarefa:
            <div id="input-control">
              <input name={`inputTask${task}`} id={`inputTask${task}`} type="text" placeholder={task} />
              <select name={`inputTypeSelect${task}`} id={`inputTypeSelect${task.toLowerCase().split(" ").join("")}`} onChange={(e) => handleChanges(e, task)}>
                <option value="placeholder">Selecione o tipo</option>
                <option value="lista" >Lista</option>
                <option value="frequencia">Frequência</option>
                <option value="valor">Valor</option>
              </select>
            </div>
            <input className='input-list' id={`inputType${task.toLowerCase().split(" ").join("")}`} name={`inputType${task}`} type='text' placeholder='insira o item da lista, ex: livros' />
          </label>
        )
      }) : <></>}
    </div>
  )
}

export default EditTasks