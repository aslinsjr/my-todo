import "./AddButton.css"

const AddButton = ( {handleClick} ) => {

  return (
    <button id="add-btn" onClick={(e) => handleClick(e)}>+ Add</button>
  )
}

export default AddButton