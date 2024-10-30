import './MissionInput.css'

const MissionInput = () => {

  

  return (
    <div className='mission-input-container'>
        <form className='mission-form'>
          <textarea id="study-target" placeholder='Insira a meta de estudo da semana'/>
          <textarea id="pratices-target" placeholder='Insira a meta de projetos para semana'/>
          <input type="number" id="extra-cash-target" placeholder='Insira a meta de renda extra semanal'/>
          <input type="submit" />
        </form>
    </div>
  )
}

export default MissionInput