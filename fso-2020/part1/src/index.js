import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Total from './components/total/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },  
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total exercises1={course.parts[0].exercises}  exercises1={course.parts[1].exercises} exercises1={course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))