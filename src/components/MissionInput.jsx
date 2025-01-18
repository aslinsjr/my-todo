import './MissionInput.css'

const MissionInput = ( { submitWeekGoals, listTasks, numberTasks, valueTasks } ) => {

  function handleSubmit(e) {
    e.preventDefault()

    let emptyValue;

    listTasks.forEach((listProp) => {

      let prop = listProp.toLowerCase().split(" ").join("")

      if (document.querySelector(`#${prop}`).value !== "") {

        localStorage.setItem(prop, document.querySelector(`#${prop}`).value.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()).split(","))
      } else {
        emptyValue = true
      }
    })

    numberTasks.forEach((numberProp) => {

      let prop = numberProp.toLowerCase().split(" ").join("")

      if (document.querySelector(`#${prop}`).value !== "") {

        localStorage.setItem(prop, document.querySelector(`#${prop}`).value)
      } else {
        emptyValue = true
      }
    })

    valueTasks.forEach((valueProp) => {

      let prop = valueProp.toLowerCase().split(" ").join("")

      if (document.querySelector(`#${prop}`).value !== "") {

        localStorage.setItem(prop, document.querySelector(`#${prop}`).value)
      } else {
        emptyValue = true
      }
    })

    if (!emptyValue) {

      submitWeekGoals()

      localStorage.setItem("week-goals", true)

    } else {
      document.querySelector("#error-span").style.display = "block"

      setTimeout(() => {
        document.querySelector("#error-span").style.display = "none"
      }, 2200)

    }
  }

  return (
    <div className="background-modal">
      <div className='mission-input-container'>
        <h2>Metas da semana</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {listTasks ? listTasks.map((listProp) => {
            return (
              <label>{listProp}:
                <input name={listProp} id={listProp.toLowerCase().split(" ").join("")} type="text" placeholder="insira os nomes dos itens separados por vírgula"/>
              </label>
            )
          }) : <></>}
          {numberTasks ? <label>Frequência:
            <div className="inner-container">
              {numberTasks ? numberTasks.map((numberProp) => {
                return (
                  <span>{numberProp} <input name={numberProp} id={numberProp.toLowerCase().split(" ").join("")} type="number" placeholder='1-7' /></span>
                )
              }) : <></>}
            </div>
          </label>: <></>}
          <div className="value-container" style={valueTasks && valueTasks.length > 1 && valueTasks.length < 4 ? { gridTemplateColumns: `repeat(${valueTasks.length}, 1fr)`, gap: "1rem", textAlign: "center" } : {}}>
            {valueTasks ? valueTasks.map((valueProp) => {
              return (
                <label id={valueProp}>{valueProp}:
                  <input name={valueProp} id={valueProp.toLowerCase().split(" ").join("")} type="text" placeholder='R$' />
                </label>
              )
            }) : <></>}
          </div>
          <input type="submit" />
        </form>
      </div>
      <span id="error-span">
        Preencha todas as informações para continuar...
      </span>
    </div>
  )
}

export default MissionInput