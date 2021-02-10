const TotalExercises = ({parts})=> {
  const total = parts.reduce((sum, part) => {
    return sum += part.exercises}
    ,0) 
  return <h3>Total of {total} exercises</h3>
}

export default TotalExercises