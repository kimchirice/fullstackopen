import React, {useState  } from 'react'
import './App.css'
import Feedback from './components/feedback/Feedback'
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
      <Feedback 
        handleGoodClick={handleGoodClick} 
        handleNeutralClick={handleNeutralClick} 
        handleBadClick={handleBadClick}
      /> 
      <Statistics 
        goodCount={goodCount} 
        neutralCount={neutralCount} 
        badCount={badCount} 
      />
    </div>
  );
}

export default App;
