import React, {useState, useEffect} from 'react'
import Person from './components/person/Person'
import Filter from './components/filter/Filter'
import PersonForm from './components/personForm/PersonForm'
import toTitleCase from './utils/toTitleCase'
import axios from "axios";

const App= () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

    useEffect(() => {
        console.log('effect')
        const url = 'http://localhost:3001/persons'
        axios
            .get(url)
            .then(response => {
                const newPersons = response.data
                setPersons(newPersons)
            })
    }, [])

  const alreadyAdded = (name) =>{
    return persons.find(person=> person.name.toUpperCase() === name.toUpperCase())
  }

  const alreadyAddedWarning = (name) => window.alert(`${toTitleCase(name)} is already added to the phonebook`)

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
      alreadyAddedWarning(newName)
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
          <Person key={person.name} name={person.name} number={person.number} />
        )}
        { filter !== '' && searchNames(filter).map( person => 
          < Person key={person.name} name={person.name} number={person.number} />
        )}
      </div>
      
      
      
      
    </div>
  )
}

export default App;
