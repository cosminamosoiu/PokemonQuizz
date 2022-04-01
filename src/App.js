<<<<<<< HEAD
import './App.css';

import QuizForm from './components/QuizForm';
import StartPage from './components/StartPage';
=======
import "./App.css";
import QuizForm from "./components/QuizForm";
import StartPage from "./components/StartPage";
import EndPage from "./components/EndPage";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6


function App() {

  const [totalPoints, setTotalPoints] = useState(0);
  

console.log(totalPoints);
  return (
    <>

      <Router>
        <Switch>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuizForm setTotalPoints={setTotalPoints}/>} />
          <Route path="/end" element={<EndPage totalPoints={totalPoints}/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
