import React from 'react';

const CountryDetails = ({name, capital, population, languages, flag}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h3>Languages</h3>
            <ul>
                {languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={flag} alt="country flag" width="300vw"/>
        </div>
    )
}

export default CountryDetails;