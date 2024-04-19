import React, { useContext } from 'react'
import './Welcome.css';
import Quiz from '../img/quiz.svg';
import { QuizContext } from '../context/quiz';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para comerça</p>
        <button onClick={()=>{dispatch({type: "CHANGE_STATE"})}}>Iniciar</button>
        <img src={Quiz} alt="Início quiz"/>
    </div>
  )
}

export default Welcome;