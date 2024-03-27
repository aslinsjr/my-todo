import './MissionButton.css'

const MissionButton = ({handleClick}) => {
  return (
    <div><button id="missions-btn" onClick={(e) => handleClick(e)}>+ Add Metas Semanais</button></div>
  )
}

export default MissionButton