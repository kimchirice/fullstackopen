import React from 'react'

const Part = ({part}) => {
  const {name, exercises} = part
  return ( <p>Name: {name}, exercises: {exercises}</p> )
}
  // here Prop is an object passed from parent compnent
  

export default Part