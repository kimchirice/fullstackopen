import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Result from './components/result/Result';
import Country from './components/country/Country';

const App = () => {
    const [ search, setSearch ] = useState('');
    const [ countries, setCountries ] = useState([]);
    const [ weather, setWeather ] = useState({});

    const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data);
            })
    }, [])

    useEffect(() => {
       const keyWeather = process.env.REACT_APP_WEATHERSTACK_API_KEY;


        console.log(`key of weather API is ${keyWeather}`)
        const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
        if (countriesToShow.length === 1) {
            const country = countriesToShow[0]
            axios
                .get(`http://api.weatherstack.com/current?access_key=${keyWeather}&query=${country.capital}`)
                .then(response => {
                    console.log(response)
                    setWeather(response.data);
                })
        }
    }, [countries, search])

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        setSearch(event.target.name);
    }

    return (
        <div>
            <Search search={search} handleChange={handleChange} />
            { countriesToShow.length !== 1 ? <Result countriesToShow={countriesToShow} handleClick={handleClick} /> : <Country country={countriesToShow[0]} weather={weather} />}
        </div>
    )

}

export default App;