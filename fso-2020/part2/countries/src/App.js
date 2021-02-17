import React, {useState, useEffect} from 'react'
import axios from "axios";

function App() {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const countriesURL = `https://restcountries.eu/rest/v2/name/${filter}`
        axios.get(countriesURL)
            .then(response => {
                console.log('data is ', response.data)
                setCountries(response.data)
            })
    },[])

    const handleFilter = (e) =>{
        setFilter(e.target.value)
    }

    const handleSearch = (filter) =>{
        return countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
    }

    const tooManyCountries = (filter) => {
        if (handleSearch(filter).length > 10) {
            return 'Too many countries, specific another filter'
        }
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
        {filter !== '' && handleSearch(filter).length <= 10 && handleSearch(filter).map(country => {
            return <div key={country.numericCode}>{country.name}</div>
        })}
        { handleSearch(filter).length === 1 && handleSearch(filter).map(country=> {
            return <div>{country.name}</div>
        })}
    </div>
  );
}

export default App;
