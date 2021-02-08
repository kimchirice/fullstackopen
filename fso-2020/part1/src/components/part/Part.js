import React from 'react'

const Part = ({part}) => 
  // here Prop is an object passed from parent compnent
  ( <p>Name: {part.name} exercises: {part.exercises}</p> )

export default Part