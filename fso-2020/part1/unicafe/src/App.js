import React, {useState  } from 'react'
import './App.css'

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
        <button onClick={handleGoodClick}>good</button>
        
        <button onClick={handleNeutralClick}>neutral</button>
        
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <table>
          <tr>
            <td>good</td>
            <td>
              {goodCount}
            </td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>
              {neutralCount}
            </td>
          </tr>
          <tr>
            <td>bad</td>
            <td>
              {badCount}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
