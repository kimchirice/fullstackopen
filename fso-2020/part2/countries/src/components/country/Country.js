import React from 'react'

const Country = ({name, capital, population, languages, flag}) => {
  console.log('')
  
  return (
    <div>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>population {population}</p>
      
      <div>
        <h5>languages</h5>
        {
          languages.map(language => <li key={language.name} >{language.name}</li>)
        }
      </div>
     
      
      <div>
        <img src={flag} alt="country flag"/>
      </div>

    </div>
  )
}

export default Country