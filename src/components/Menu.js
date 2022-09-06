import React, { useState } from 'react'
import { useContext } from 'react'
import GamestateContext from './helpers/Contexts'

function  Menu() {

    // Menu palying , finished

const [gameState , SetgameState, userName , SetuserName] = useContext(GamestateContext)



  return (
    <div className= "Menu">
        <label>Enter Your Name: </label>
        <input onChange={(event) => SetuserName(event.target.value) } type="text" placeholder='Ex. John simth' />
        <button onClick={() =>{
             SetgameState("playing")
             console.log(gameState) }}
             > Start Quiz </button>
    </div>
  )
}

export default  Menu