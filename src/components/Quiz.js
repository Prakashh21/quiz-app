import React, { useContext, useState } from 'react'
import "../App.css"
import GamestateContext from './helpers/Contexts'
import { Questions } from './helpers/Questions'


function Quiz() {
    const [currentQuestion , SetcurrentQuestion] = useState(0)
    const [choosenOption , SetchoosenOption] = useState("")
    const [score , Setscore , gameState , SetgameState] = useContext(GamestateContext)
    
    let chooseOption = (option) => SetchoosenOption(option)
  
    function changeQuestionHandler(){
        if(Questions[currentQuestion].answer === choosenOption){
                Setscore(score + 1)
        }   
        SetcurrentQuestion(ques => ques + 1)
    }

    function FinishQuestion(){
        SetgameState("finished")
        console.log(gameState)
    }
 
    return (
    <div className='Quiz'>
        <h1>{Questions[currentQuestion].prompt}</h1>
        
        <button onClick={() => chooseOption("optionA")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={() => chooseOption("optionB")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={() => chooseOption("optionC")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={() => chooseOption("optionD")}>{Questions[currentQuestion].optionD}</button>
       {currentQuestion === Questions.length - 1  
       ? <button onClick={FinishQuestion}>End Quiz</button>
       : <button onClick={changeQuestionHandler}>Next Question</button> 
    }
       
       
            
    </div>
  )
}

export default Quiz