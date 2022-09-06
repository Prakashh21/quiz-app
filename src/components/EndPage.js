import React, { useContext } from 'react'
import "../App.css"
import GamestateContext from './helpers/Contexts'


function EndPage() {
 

  const [score , Setscore ] = useContext(GamestateContext)
  console.log(score)
  return (
    <div className='EndScreen'>
    <h1>Quiz Finished !!</h1>
    <h1>{score}</h1>
    
    
    </div>
  )
}

export default EndPage