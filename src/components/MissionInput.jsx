import './MissionInput.css'

const MissionInput = ({ submitWeekGoals }) => {

  function handleSubmit(e) {
    e.preventDefault()

    localStorage.setItem("book-list", e.target.books.value.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()).split(","))
    localStorage.setItem("classes-list", e.target.classes.value.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()).split(","))
    localStorage.setItem("projects-list", e.target.projects.value.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()).split(","))
    localStorage.setItem("english", e.target.english.value)
    localStorage.setItem("espanhol", e.target.espanhol.value)
    localStorage.setItem("drums", e.target.drums.value)
    localStorage.setItem("extra-cash", e.target.extraCash.value)

    if (e.target.books.value && e.target.classes.value && e.target.projects.value && e.target.english.value && e.target.espanhol.value && e.target.drums.value && e.target.extraCash.value) {

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
          <label>Livros para a semana:
            <input name='books' type="text" placeholder='insira os nomes dos livros separados por vírgula' />
          </label>
          <label>Aulas da semana:
            <input name='classes' type="text" placeholder='insira os nomes dos locais de aula separados por vírgula' />
          </label>
          <label>Projetos da semana:
            <input name='projects' type="text" placeholder='insira os nomes dos projetos separados por vírgula' />
          </label>
          <label>Frequência na semana:
            <div className="inner-container">
              <span>Inglês <input name='english' type="number" /></span>
              <span>Espanhol <input name='espanhol' type="number" /></span>
              <span>Bateria <input name='drums' type="number" /></span>
            </div>
          </label>
          <label id='extra-cash-input'>Meta de Renda Extra: R$
            <input name='extraCash' type="text" />
          </label>
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