import React from 'react'

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
              <tr>
                <td>good</td>
                <td>
                  {goodCount}
                </td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>
                  {neutralCount}
                </td>
              </tr>
              <tr>
                <td>bad</td>
                <td>
                  {badCount}
                </td>
              </tr>
              <tr>
                <td>all</td>
                <td>
                  { goodCount + neutralCount + badCount }
                </td>
              </tr>
              <tr>
                <td>average</td>
                <td>
                  {(goodCount + neutralCount - badCount) / (goodCount + neutralCount + badCount)}
                </td>
              </tr>
              <tr>
                <td>positive</td>
                <td>
                {(goodCount + neutralCount) / (goodCount + neutralCount + badCount)}
                </td>
              </tr>
            </table>
        }
      </div>
    )
}

export default Statistics