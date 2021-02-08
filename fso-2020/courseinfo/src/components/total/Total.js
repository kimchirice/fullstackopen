import React from 'react'

const Total = ({exercises1, exercises2, exercises3})=> {
  function convertToNumber(string) {
    return parseInt(string, 10)
  }
  
  exercises1 = convertToNumber(exercises1)
  exercises2 = convertToNumber(exercises2)
  exercises3 = convertToNumber(exercises3)
  

  return (
    <p>Total number of exercises is {exercises1 + exercises2 + exercises3}</p>
  )
}

export default Total