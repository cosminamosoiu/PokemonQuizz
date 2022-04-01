import './App.css';
import QuizForm from './components/QuizForm';
import StartPage from './components/StartPage';
import EndPage from './components/EndPage';
import { useState } from 'react';


function App() {

  const [totalPoints, setTotalPoints] = useState(0);


console.log(totalPoints);
  return (
    <>
      {/* <QuizForm setTotalPoints={setTotalPoints} /> */}
      {/* <StartPage /> */}
      <EndPage totalPoints={totalPoints}/>
    </>
  );
}

export default App;
