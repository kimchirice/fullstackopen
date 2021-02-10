import React, {useState} from 'react'

const App= () => {
  const [ persons, setPersons ] = useState(
    [
      { name: 'Arto Hellas' }
    ]
  ) 

  const [ newName, setNewName ] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('this event is', e)
    
    const newNameObject = {name: newName}
    setPersons(prev => {
     prev.concat(newNameObject)
    })
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit} >add</button>
        </div>
      </form>

      <div>debug: newName is {newName}</div>
      <h2>Numbers</h2>
      <ul>
      
      <li>1</li>
        <li>2</li>
      </ul>
      
    </div>
  )
}

export default App;
