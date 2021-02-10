import React, {useState} from 'react'
import Person from './person/Person'

const App= () => {
  const [ persons, setPersons ] = useState(
    [
      { name: 'Arto Hellas',
        number: '040-1234567'
      }
    ]
  ) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const alreadyAdded = (name) =>{
    return persons.find(person=> person.name === name)
  }

  const alreadyAddedWarnning = (name) => window.alert(`${name} is already added to the phonebook`)

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleAddNumber = (e) =>{
    setNewNumber(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('this event is', e)
    if (alreadyAdded(newName)) {
      alreadyAddedWarnning(newName)
    } else {
      const newNameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newNameObject))
    }
    setNewName('')
    setNewNumber('')
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
          number:<input
                   value={newNumber}
                   onChange={handleAddNumber}
                 />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit} >add</button>
        </div>
      </form>

      <div>debug: newName is {newName}</div>
      <div>debug: newNumber is {newNumber}</div>

      <h2>Numbers</h2>
      <div>
        {persons.map( person => 
          <Person name={person.name} number={person.number} />
        )}
      </div>
      
      
      
    </div>
  )
}

export default App;
