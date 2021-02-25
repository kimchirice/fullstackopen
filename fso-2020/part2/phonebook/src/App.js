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

  const updatePersonWithNewNumber = (person, updatenNumber) => {
    const newPerson = {
      ...person,
        number: updatenNumber
    }
      personsServices
          .update(person.id, newPerson)
          .then( returnedPerson => {
              setPersons(persons.map(person => person.name !== newName ? person : returnedPerson ))
          })
      setNewName('')
      setNewNumber('')
  }

  const alreadyAdded = (name) =>{
    return  persons.find(person=> person.name.toUpperCase() === name.toUpperCase())
  }

  const findNameWithId =(id) => {
        return persons.find(person=> person.id === id).name
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
      console.log(`adding new number, ${newNumber}`)
  }

  const searchNames = (filter) => {
    return persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      if (newName === '' || newNumber === '') {
          window.alert('both name and number can NOT be empty, please input')
      } else if (alreadyAdded(newName)) {
          console.log(`argument newName passed to function handleSubmit is ${newName}`)
          console.log(`argument newNumber passed to function handleSubmit is ${newNumber}`)
          const oldEntry = alreadyAdded(newName)
            console.log(oldEntry.number)
          if (newNumber === oldEntry.number) {
            alreadyAddedWarnning(newName)
        } else {
              if (window.confirm(`${oldEntry.name} already added to the phonebook. Do you want to update 
              the phone number with ${newNumber}?`)){
                  updatePersonWithNewNumber(oldEntry, newNumber)
              }

        }
    } else {
        const newPersonObject = {
            name: toTitleCase(newName),
            number: newNumber
        }
        console.log('new Person is ', newPersonObject)

        personsServices
            .create(newPersonObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
    }
  }


  const handleDelete = (id) => {
        const deleteName = findNameWithId(id)
        console.log(deleteName)
        if ( window.confirm(`you really want to remove the entry ${deleteName}?`) ) {
            personsServices
                .deletePerson(id)
                .then(() =>{
                    setPersons(persons.filter(person => person.id !== id));
                })
            setNewNumber('')
            setNewName('')
        }
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
            />)
        }
      </div>
    </div>
  )
}

export default App;
