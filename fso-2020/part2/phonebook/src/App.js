import React, {useState, useEffect} from 'react'
import Person from './components/person/Person'
import Filter from './components/filter/Filter'
import PersonForm from './components/personForm/PersonForm'
import toTitleCase from './utils/toTitleCase'
import personsServices from './services/persons'

const App= () => {
    const [newName, setNewName ] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [persons, setPersons] = useState(null)

    useEffect(()=>{
        personsServices
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })}
    ,[])

  const alreadyAdded = (name) =>{
    return persons.find(person=> person.name.toUpperCase() === name.toUpperCase())
  }

  const findNameWithId =(id) => {
        return persons.find(person=> person.id === id).["name"]
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

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (alreadyAdded(newName)) {

      alreadyAddedWarnning(newName)
    } else {
      const newNameObject = {
        name: toTitleCase(newName),
        number: newNumber
      }
      console.log('newPerson is ',newNameObject)

      personsServices
        .create(newNameObject)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
        })
    }

  }

  const handleDelete = (id) => {
        const deleteName = findNameWithId(id)
        if (window.confirm(`Do you really want to delete ${deleteName}`) ) {
          window.open("exit.html", "deleting!");
        }
        personsServices
          .deletePerson(id)
          .then(() =>{
              setPersons(persons.filter((p) => p.id !== id));
          })
      setNewNumber('')
      setNewName('')
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
        { filter === '' && persons !== null && persons.map( person =>
          <Person
              key={person.id}
              name={person.name}
              number={person.number}
              id={person.id}
              handleDelete={handleDelete}
          />
        )}
        { filter !== '' && persons !== null && searchNames(filter).map( person =>
          < Person
              name={person.name}
              number={person.number}
              id={person.id}
              handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  )
}

export default App;
