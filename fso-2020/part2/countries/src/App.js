import React, {useState, useEffect} from 'react'
import axios from "axios";

function App() {
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
            return <div key={country.numericCode}>{country.name}</div>
        })}
        { handleSearch(filter).length === 1 && handleSearch(filter).map(country=> {
            return (<div>
                    <h2>{country.name}</h2>
                    <p>capital {country.capital}</p>
                    <p>population {country.population}</p>
            
        
                    <h5>languages</h5>
                    {country.languages.map(language => {
                        return <li key={language.name}>{language.name}</li>    
                    })}

                    <img src={country.flag} alt="country flag"/>

                    </div>)
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
