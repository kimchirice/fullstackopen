import React from 'react'
import Statistic from '../statistic/Statistic'

const Statistics = ({goodCount, neutralCount, badCount}) => {
    return (
      <div>
        <h2>statistics</h2>
        { 
          (goodCount === 0 && neutralCount === 0 && badCount === 0) && 
          <p>No feedback given</p> 
        }
        { 
          (goodCount !== 0 || neutralCount !== 0 || badCount !== 0) &&
            <table>
              <tbody>
                <Statistic name={"good"} value={goodCount} />
                <Statistic name={"neutral"} value={neutralCount} />
                <Statistic name={"bad"} value={badCount} />
                <Statistic name={"all"} value={goodCount + neutralCount + badCount} />
                <Statistic name={"average"} value={(goodCount + neutralCount - badCount) / (goodCount + neutralCount + badCount)} />
                <Statistic name={"positive"} value={(goodCount + neutralCount) / (goodCount + neutralCount + badCount)} />
              </tbody>
            </table>
        }
      </div>
    )
}

export default Statistics