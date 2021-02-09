import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const initialPoints = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0 
  }

  const initialVote = 0

  const [selected, setSelected] = useState(2)
  const [points, setPoints] = useState(initialPoints)
  const [maxVote, setMaxVote] = useState(initialVote)
  console.log(points)

  const handleNext = (e) => {
    e.preventDefault()
    const maximum = anecdotes.length - 1
    setSelected(getRandomIntInclusive(0, maximum))
    console.log(`after clicked, now selected is ${selected}`)
  }

  const handleVote = (e) => {
    e.preventDefault()
    // check current selected anecdote and its realted point
    // then add one more point to it
    let newPoint = points[selected] + 1
    setPoints(prev => (
      {
        ...prev,
        [selected]: newPoint,
        
      })
    )
    
    let maxVoteNew = Object.keys(points).reduce((maxVote, key) => (maxVote === undefined || points[key] > points[maxVote]) ? +key : maxVote)
    setMaxVote(maxVoteNew);
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <h4>{anecdotes[selected]}</h4>
        <p>has {points[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <h4>{anecdotes[maxVote]}</h4>
        <p>has {points[maxVote]} votes</p> 
       
      </div>    
    </div>
  )
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
