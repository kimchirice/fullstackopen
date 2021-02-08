import React, {useState  } from 'react'
import './App.css'
import Buttons from './components/buttons/Buttons'
import Statistics from './components/statistics/Statistics'

function App() {

  let initialCount = 0 
  const [goodCount, setGoodCount] = useState(initialCount)
  const [neutralCount, setNeutralCount] = useState(initialCount)
  const [badCount, setBadCount] = useState(initialCount)
  
  const handleGoodClick = (e) =>{
    e.preventDefault()
    setGoodCount(prev => prev += 1 )
  }

  const handleBadClick = (e)=>{
    e.preventDefault()
    setBadCount(prev => prev += 1 )
  }

  const handleNeutralClick = (e) =>{
    e.preventDefault()
    setNeutralCount(prev => prev += 1)
  }

  return (
    <div className="App">
       <div>
        <h2>give feedback</h2>
        <Buttons 
          handleGoodClick={handleGoodClick} 
          handleNeutralClick={handleNeutralClick} 
          handleBadClick={handleBadClick}
        /> 
      </div>
      <Statistics 
        goodCount={goodCount} 
        neutralCount={neutralCount} 
        badCount={badCount} 
      />
    </div>
  );
}

export default App;
