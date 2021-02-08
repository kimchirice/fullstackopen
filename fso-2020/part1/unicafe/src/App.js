import React, {useState,  } from 'react'
import './App.css';

function App() {

  let initialCount = 0 
  const [goodCount, setGoodCount] = useState(initialCount)
  const [neutralCount, setNeutralCount] = useState(initialCount)
  const [badCount, setBadCount] = useState(initialCount)
  
  const handleGoodClick = () =>{
    let currentGoodCount = goodCount
    setGoodCount(currentGoodCount++)
  }

  const handleBadClick = ()=>{
    let currentBadCount = badCount
    setBadCount(currentBadCount++)
  }

  const handleNeutralClick = () =>{
    let currentNeutralCount = neutralCount
    setNeutralCount(currentNeutralCount++)
  }

  return (
    <div className="App">
       <div>
        <h2>give feedback</h2>
        <button onClick={handleGoodClick}>good</button>
        <br></br>
        <button onClick={handleNeutralClick}>neutral</button>
        <br></br>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <table>
          <tr>
            <td>&nbsp;</td>
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
