import './RoutineInput.css'

const RoutineInput = ({handleClick, actualDay, handleInput}) => {


    function setDay(actualDay) {
        if(actualDay == 0) {
            return "Domingo"
        }
        if(actualDay == 1) {
            return "Segunda"
        }
        if(actualDay == 2) {
            return "Terça"
        }
        if(actualDay == 3) {
            return "Quarta"
        }
        if(actualDay == 4) {
            return "Quinta"
        }
        if(actualDay == 5) {
            return "Sexta"
        }
        if(actualDay == 6) {
            return "Sábado"
        }

        console.log(setDay(actualDay))
    }

  return (
    <div className='back-ground'>
        <form>
            <h2>{setDay(actualDay)}</h2>
            <label htmlFor="meditation">Meditação / Leitura
                <input type="checkbox"  name="meditation" onChange={(e) => handleInput(e)}/>
            </label>
            <label htmlFor="workout">Treino / Alongamento
                <input type="checkbox"  name="workout" onChange={(e) => handleInput(e)} />
            </label>
            <label htmlFor="linkedin">Currículo / LinkedIn
                <input type="checkbox"  name="linkedin" onChange={(e) => handleInput(e)} />
            </label>
            <label htmlFor="study">Estudo / Prática
                <input type="checkbox"  name="study" onChange={(e) => handleInput(e)}/>
            </label>
            <label htmlFor="extra-cash">Renda Variável
                <input type="number" id="extra-cash" name="extra-cash" onChange={(e) => handleInput(e)}/>
            </label>
            <input type="submit" id='submit-btn' value="Enviar" onClick={(e) => handleClick(e)} />
        </form>
    </div>
  )
}

export default RoutineInput