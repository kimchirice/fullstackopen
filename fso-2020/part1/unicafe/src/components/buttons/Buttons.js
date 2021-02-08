import React from 'react'
import Button from '../button/Button'

const Buttons = ({handleGoodClick, handleNeutralClick, handleBadClick}) => {
  return (
    <div>
      <Button title={"good"} handleClick={handleGoodClick} />
      <Button title={"neutral"} handleClick={handleNeutralClick} />
      <Button title={"bad"} handleClick={handleBadClick} />
    </div>
  )
}

export default Buttons