import './WeekRoutine.css'

import { useEffect, useState } from 'react'

const WeekRoutine = () => {

    const [clicked, setClicked] = useState()
    const [extraCash, setExtraCash] = useState(false)

    function handleClick(e) {

        setClicked(e.target.id)

        if(e.target.id.includes("renda")) {

            setExtraCash(true)

        } else {
            if (e.target.innerHTML === "") {

                e.target.innerHTML = "✅"
                localStorage.setItem(e.target.id, e.target.innerHTML)
            } else {
                e.target.innerHTML = ""
                localStorage.setItem(e.target.id, e.target.innerHTML)
            }
        }

    }

    function handleSubmitExtraCash(e) {
        e.preventDefault()
        localStorage.setItem(clicked, e.target.renda.value)
        
        setExtraCash(false)
    }

    return (
        <div className='week-routine'>
            <h2>Quadro de Rotina</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Semana:</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                    <tr>
                        <th>Ler</th>
                        <td id='ler01' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler01")}</td>
                        <td id='ler02' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler02")}</td>
                        <td id='ler03' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler03")}</td>
                        <td id='ler04' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler04")}</td>
                        <td id='ler05' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler05")}</td>
                        <td id='ler06' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler06")}</td>
                        <td id='ler07' onClick={(e) => handleClick(e)}>{localStorage.getItem("ler07")}</td>
                    </tr>
                    <tr>
                        <th>Treinar</th>
                        <td id='treinar01' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar01")}</td>
                        <td id='treinar02' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar02")}</td>
                        <td id='treinar03' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar03")}</td>
                        <td id='treinar04' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar04")}</td>
                        <td id='treinar05' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar05")}</td>
                        <td id='treinar06' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar06")}</td>
                        <td id='treinar07' onClick={(e) => handleClick(e)}>{localStorage.getItem("treinar07")}</td>
                    </tr>
                    <tr>
                        <th>Assistir Aula</th>
                        <td id='aula01' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula01")}</td>
                        <td id='aula02' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula02")}</td>
                        <td id='aula03' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula03")}</td>
                        <td id='aula04' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula04")}</td>
                        <td id='aula05' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula05")}</td>
                        <td id='aula06' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula06")}</td>
                        <td id='aula07' onClick={(e) => handleClick(e)}>{localStorage.getItem("aula07")}</td>
                    </tr>
                    <tr>
                        <th>Desenvolver Projeto</th>
                        <td id='projeto01' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto01")}</td>
                        <td id='projeto02' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto02")}</td>
                        <td id='projeto03' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto03")}</td>
                        <td id='projeto04' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto04")}</td>
                        <td id='projeto05' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto05")}</td>
                        <td id='projeto06' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto06")}</td>
                        <td id='projeto07' onClick={(e) => handleClick(e)}>{localStorage.getItem("projeto07")}</td>
                    </tr>
                    <tr>
                        <th>Praticar Inglês</th>
                        <td id='ingles01' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles01")}</td>
                        <td id='ingles02' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles02")}</td>
                        <td id='ingles03' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles03")}</td>
                        <td id='ingles04' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles04")}</td>
                        <td id='ingles05' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles05")}</td>
                        <td id='ingles06' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles06")}</td>
                        <td id='ingles07' onClick={(e) => handleClick(e)}>{localStorage.getItem("ingles07")}</td>
                    </tr>
                    <tr>
                        <th>Aprender Espanhol</th>
                        <td id='espanhol01' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol01")}</td>
                        <td id='espanhol02' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol02")}</td>
                        <td id='espanhol03' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol03")}</td>
                        <td id='espanhol04' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol04")}</td>
                        <td id='espanhol05' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol05")}</td>
                        <td id='espanhol06' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol06")}</td>
                        <td id='espanhol07' onClick={(e) => handleClick(e)}>{localStorage.getItem("espanhol07")}</td>
                    </tr>
                    <tr>
                        <th>Praticar Bateria</th>
                        <td id='bateria01' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria01")}</td>
                        <td id='bateria02' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria02")}</td>
                        <td id='bateria03' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria03")}</td>
                        <td id='bateria04' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria04")}</td>
                        <td id='bateria05' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria05")}</td>
                        <td id='bateria06' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria06")}</td>
                        <td id='bateria07' onClick={(e) => handleClick(e)}>{localStorage.getItem("bateria07")}</td>
                    </tr>
                    <tr>
                        <th>Renda Extra</th>
                        <td id='renda01' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda01")}</td>
                        <td id='renda02' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda02")}</td>
                        <td id='renda03' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda03")}</td>
                        <td id='renda04' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda04")}</td>
                        <td id='renda05' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda05")}</td>
                        <td id='renda06' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda06")}</td>
                        <td id='renda07' onClick={(e) => handleClick(e)}>{localStorage.getItem("renda07")}</td>
                    </tr>
                </tbody>
            </table>
            {extraCash ? <div className="background-modal">
                <form onSubmit={(e) => handleSubmitExtraCash(e)}>
                    <label>Informe a renda extra do dia:
                        <input name='renda' type="text" />
                    </label>
                    <input type="submit" />
                </form>
            </div>: <></>}
        </div>
    )
}

export default WeekRoutine