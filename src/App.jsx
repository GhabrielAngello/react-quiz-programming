import './App.css';
import Welcome from './components/Welcome';
import { useContext, useEffect } from 'react';
import Questions from './components/Questions';
import { QuizContext } from './context/quiz';
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=>{
    dispatch({type: "REORDER_QUESTIONS"})
  },[])

  return (
    <div className='App'>
      <h1>Quiz</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
