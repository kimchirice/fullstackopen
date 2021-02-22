import React from 'react';
import CountryDetails from '../countryDetails/CountryDetails';
import Weather from '../weather/Weather';

const Country = ({ country, weather }) => {
    return (
        <div>
            <CountryDetails
                name={country.name}
                capital={country.capital}
                population={country.population}
                languages={country.languages}
                flag={country.flag}
            />
            <Weather country={country} weather={weather} />
        </div>
    )
}

export default Country;