import "./App.css";
import QuizForm from "./components/QuizForm";
import StartPage from "./components/StartPage";
import EndPage from "./components/EndPage";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuizForm />} />
          <Route path="/end" element={<EndPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
