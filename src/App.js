import React, { useState } from 'react';
import './App.css';
import EndPage from './components/EndPage';
import GamestateContext from './components/helpers/Contexts';
import Menu from './components/Menu';
import Quiz from './components/Quiz';




function App() {
  const [gameState , SetgameState] = useState("finished")
  const [userName , SetuserName] = useState("")
  const [score , Setscore] = useState(0)

  // console.log(gameState)
  return (
    <div className="App">
      <GamestateContext.Provider value={[gameState , SetgameState, userName , SetuserName , score , Setscore]}>
        <h1>Quiz App</h1>
        {gameState === "menu" &&  <Menu />}
        {gameState === "playing" &&  <Quiz />}
        {gameState === "finished" && <EndPage />}
        </GamestateContext.Provider>
    </div>
  );
}

export default App;
