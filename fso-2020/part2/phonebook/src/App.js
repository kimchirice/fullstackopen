import React, {useState} from 'react'
import Person from './person/Person'

const App= () => {
  const [ persons, setPersons ] = useState(
    [
      { name: 'Arto Hellas' }
    ]
  ) 

  const [ newName, setNewName ] = useState('')

  const alreadyAdded = (name) =>{
    return persons.find(person=> person.name === name)
  }

  const alreadyAddedWarnning = (name) => window.alert(`${name} is already added to phonebook`)

  const handleChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('this event is', e)
    if (alreadyAdded(newName)) {
      alreadyAddedWarnning(newName)
    } else {
      const newNameObject = {name: newName}
      setPersons(persons.concat(newNameObject))
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleChange}
                />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit} >add</button>
        </div>
      </form>

      <div>debug: newName is {newName}</div>
      <h2>Numbers</h2>
      <div>
        {persons.map( person => 
          <Person name={person.name} />
        )}
      </div>
      
      
      
    </div>
  )
}

export default App;
