import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const initialPoints = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    5: 0 
  }
  const [selected, setSelected] = useState(2)
  const [points, setPoints] = useState(initialPoints)
  console.log(points)

  const handleClick = (e) => {
    e.preventDefault()
    const maximum = anecdotes.length - 1
    setSelected(getRandomIntInclusive(0, maximum))
    console.log(`after clicked, now selected is ${selected}`)
  }

  const handleVote = (e) => {
    e.preventDefault()
    let newPoint = points[selected] + 1
    setPoints(prev => (
      {
        [selected]: newPoint,
        ...prev,
      })
    )
  }

  return (
    <div>
      <div>
        {anecdotes[selected]}
        <p>has {points[selected]} votes</p>
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>Next anecdote</button>
      </div>
    </div>)
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);
