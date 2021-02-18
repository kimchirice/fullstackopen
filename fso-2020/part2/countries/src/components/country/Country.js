import React from 'react'

const Country = ({name, capital, population, languages, flag}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h5>languages</h5>
      {languages.map(language => {
          return <li key={language.name}>{language.name}</li>    
      })}
      <img src={flag} alt="country flag"/>

    </div>
  )
}

export default Country