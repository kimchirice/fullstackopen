import React, {useState, useEffect} from 'react'
import axios from "axios";
import Country from './components/country/Country'

function App() {
// todos
// add a button when multiple results, 

    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    const handleFilter = (e) =>{
        setFilter(e.target.value)
    }

    useEffect(() => {
        const countriesURL = `https://restcountries.eu/rest/v2/name/${filter}`
        console.log("current url is ", countriesURL)
        axios.get(countriesURL)
            .then(response => {
                console.log('data is ', response.data)
                setCountries(response.data)
            })
    },[filter])

  

    const handleSearch = (filter) =>{
        return countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
    }

    const tooManyCountries = (filter) => {
        if (handleSearch(filter).length > 10) {
            return 'Too many countries, specific another filter'
        }
    }

    const handleShowButton = (event) => {
        console.log('what is include', event.target.value)
    }

    return (
    <div className="App">
      find countries<input
                        value={filter}
                        onChange={handleFilter}
                    />
                    <div>
                        debug: filter is: {filter}
                    </div>

        
        {filter !== '' && handleSearch(filter).length > 10 && tooManyCountries(filter)}
        {filter !== '' && handleSearch(filter).length <= 10 && handleSearch(filter).length > 1 && handleSearch(filter).map(country => {
            return (<div key={country.numericCode}>
                {country.name}
                <button onClick={handleShowButton}>show</button>
                </div>)
        })}
        { handleSearch(filter).length === 1 && handleSearch(filter).map(country => {
            return <Country 
                      name={country.name}
                      capital={country.capital} 
                      population={country.population} 
                      language={country.languages}
                      flag={country.flag} 
                    /> 
            })
        }

        <div>
            <h4>debug</h4>
            <p>how many matched found {handleSearch(filter).length}</p>
        </div>
    </div>
  );
}

export default App;
