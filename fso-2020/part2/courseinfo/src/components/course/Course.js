import React from 'react'
import Content from '../content/Content'
import Header from '../header/Header'

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} /> 
      <Content parts={course.parts} />
    </div>
  )


}

export default Course