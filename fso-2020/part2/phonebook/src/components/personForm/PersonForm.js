import React from 'react'

const PersonForm = ({
                      newName, 
                      handleChange, 
                      newNumber, 
                      handleAddNumber, 
                      handleSubmit
                    }) => {
  return (
    <form>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleChange}
                />
        </div>
        <div>
          number:<input
                   value={newNumber}
                   onChange={handleAddNumber}
                 />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit} >add</button>
        </div>
    </form>
  )
}

export default PersonForm