import { useState, useEffect } from "react";
import "./Quiz.css"
import questions from "./Question.json"

function Quiz() {

  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [userAnswer , setUserAnswer] = useState([]);



 const onAnswerClick = (handleNextQuestion, isCorrect)=>{
  handleNextQuestion(isCorrect)
 }

 const handleNextQuestion = (isCorrect)=>{
  if (currentQuestion < questions.length - 1) {
  setCurrentQuestion(currentQuestion+1);
  setUserAnswer([...userAnswer, isCorrect])
 } 
 else{
  alert("Quiz Completed");
 }
 };

 const correctAnswer = userAnswer.filter((answer)=> answer).length;
 return 

  return (
    <div className='container'>
      <h1>Quiz App</h1>
    <div className="question">
      <h2>{questions[currentQuestion].question}</h2>
      
      <ul className="options">
        {
          questions[currentQuestion].answerOptions.map((option)=>{
            return <li key = {option.text}>
              <button onClick={()=>onAnswerClick(handleNextQuestion , option.isCorrect)}>{option.text}</button>
            </li>
          })
        }

      </ul>
     
    </div> 
    <div className="result">
      <h2>Result</h2>
      <p>You Answered out of  {questions.length} question</p>
      </div>   
    </div>
  )
}

export default Quiz
