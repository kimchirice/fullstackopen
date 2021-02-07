import React from 'react'

const Part = ({name, exercise}) => {
  console.log(name)
  console.log(exercise)
  return (
    <p>{name} {exercise}</p>
  )
}

export default Part