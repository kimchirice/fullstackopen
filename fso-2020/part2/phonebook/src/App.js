import React, {useState} from 'react'
import Person from './components/person/Person'
import Filter from './components/filter/Filter'
import PersonForm from './components/personForm/PersonForm'
import toTitleCase from './utils/toTitleCase'

const App= () => {
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas',
        number: '040-1234567'
      },
      { name: 'Ada Lovelace', 
        number: '39-44-5323523'
      },
      { name: 'Dan Abramov', 
        number: '12-43-234345'
      },
      { name: 'Mary Poppendieck', 
        number: '39-23-6423122'
      },
    ]
  ) 

  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const alreadyAdded = (name) =>{
    return persons.find(person=> person.name.toUpperCase() === name.toUpperCase())
  }

  const alreadyAddedWarnning = (name) => window.alert(`${name.toUpperCase()} is already added to the phonebook`)

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleAddNumber = (e) =>{
    setNewNumber(e.target.value)
  }

  const searchNames = (filter) => {
    return persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('this event is', e)
    if (alreadyAdded(newName)) {
      alreadyAddedWarnning(newName)
    } else {
      const newNameObject = {
        name: toTitleCase(newName),
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
      
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      
      <h3>Add a new</h3>
      
      <PersonForm 
        newName={newName}
        handleChange={handleChange} 
        newNumber={newNumber}
        handleAddNumber={handleAddNumber}
        handleSubmit={handleSubmit}
      /> 

      <h2>Numbers</h2>
      <div>
        { filter === '' && persons.map( person => 
          <Person name={person.name} number={person.number} />
        )}
        { filter !== '' && searchNames(filter).map( person => 
          < Person name={person.name} number={person.number} />
        )}
      </div>
      
      
      
      
    </div>
  )
}

export default App;
