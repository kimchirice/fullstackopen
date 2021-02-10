import React from 'react'
import Buttons from '../buttons'

const Feedback = ({handleGoodClick, handleNeutralClick, handleBadClick}) => {
  return (
    <div>
        <h2>give feedback</h2>
        <Buttons 
          handleGoodClick={handleGoodClick} 
          handleNeutralClick={handleNeutralClick} 
          handleBadClick={handleBadClick}
        /> 
      </div>
  )
}

export default Feedback