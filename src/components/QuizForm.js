import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./quizForm.css";
import EndPage from './EndPage';

function QuizForm() {
=======
import "../styles/quizForm.css";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";


function QuizForm(props) {
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
  const [data, setData] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [pokemonNumber, setPokemonNumber] = useState(null);
<<<<<<< HEAD
  const [inputValue, setInputValue] = useState('');
  const [points, setPoints] = useState(0);

  useEffect(async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&&limit=150')
      .then(res => {
        return res.json();
      })
      .then(data => {
=======
  const [inputValue, setInputValue] = useState("");
  const [points, setPoints] = useState(0);
  const handleSetTotalPoints = () => props.setTotalPoints(points);

  useEffect(async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&&limit=150")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
        setData(data);
      });
  }, []);

  const questionCounter = () => {
    setQuestionNumber(questionNumber + 1);
    setSubmitted(false);
  };

  const submitQuestion = () => {
    setSubmitted(true);
  };

  const randomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 150 + 1);
    if (randomNumber < 10) {
      randomNumber = `00${randomNumber}`;
    } else {
      if (randomNumber >= 10 && randomNumber < 100) {
        randomNumber = `0${randomNumber}`;
      }
    }
    setPokemonNumber(randomNumber);
  };
<<<<<<< HEAD

  const handleSearch = e => {
    if (
      inputValue.toLowerCase() ===
      (pokemonNumber ? data.results[parseInt(pokemonNumber - 1, 10)].name : '')
    ) {
      setPoints(points + 1);
    } else {
    }
  };

    const clearInput = () => {
      setInputValue('');
    };

    if (data != null) {
      if (pokemonNumber === null) {
        randomNumber();
      }

      return (
        <div className='quizForm'>
          <div className='infos'>
            <p>Question Number: {questionNumber}</p>
            <p>Your points: {points}</p>
            <p>{pokemonNumber}</p>
=======

  const handleSearch = (e) => {
    if (
      inputValue.toLowerCase() ===
      (pokemonNumber ? data.results[parseInt(pokemonNumber - 1, 10)].name : "")
    ) {
      setPoints(points + 1);
    } else {
    }
  };

  function capitalizeFirstLetter(str) {
    return(str.charAt(0).toUpperCase() + str.slice(1));
  }

  if (data != null) {
    if (pokemonNumber === null) {
      randomNumber();
    }

    return (
      <Paper elevation={3}>
        <div className="container">
          {submitted ? (
            <img
              src="/images/pokemonis.png"
              alt="who's that pokemon?"
              className="who-that-pokemon-image"
            />
          ) : (
            <img
              src="/images/whosthatpoke.png"
              alt="who's that pokemon?"
              className="who-that-pokemon-image"
            />
          )}
          <div className="infos">
            <p>Question Number: {questionNumber} / 10</p>
            {submitted ? (
              <p className="poke-name">{capitalizeFirstLetter(data.results[parseInt(pokemonNumber - 1, 10)].name)}
            </p>
            ) : (
              <p  className="poke-name" > </p>
            ) 
            
            }
            <p>Your score is: {points} points</p>
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
          </div>

          {submitted ? (
            <div>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}
<<<<<<< HEAD
                alt='Real IMage'
              ></img>
              <p>
                {pokemonNumber
                  ? data.results[parseInt(pokemonNumber - 1, 10)].name
                  : ''}
              </p>
            </div>
          ) : (
            <div className='silhouette'>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}
                alt='Silhouette'
              ></img>
            </div>
          )}
          <input
            placeholder='Insert aswear'
            value={inputValue}
            onChange={e => {
=======
                alt="Real IMage"
              ></img>
              
            </div>
          ) : (
            <div className="silhouette">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}
                alt="Silhouette"
              ></img>
              
            </div>
          )}
          <input
            placeholder="Insert aswear"
            value={inputValue}
            onChange={(e) => {
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
              setInputValue(e.target.value);
            }}
          />
          {submitted ? (
            questionNumber === 10 ? (
<<<<<<< HEAD
              <button>End Game</button>
            ) : (
              <button
                onClick={() => {
                  questionCounter();
                  randomNumber();
                  clearInput();
                }}
              >
                Next
              </button>
            )
          ) : (
            <button
              onClick={() => {
                submitQuestion();
                handleSearch();
              }}
            >
              Submit
            </button>
          )}
          <EndPage points={points} />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
=======

              <Link to="/end">  
                <Button className="game-button" variant="contained" size="large" onClick={() => { handleSearch(); handleSetTotalPoints(); }  } 
              sx={{
                width: '200px',
                marginTop: '20px',
              }}>End Game</Button>
              </Link>

            ) : (
              <Button className="game-button" variant="contained" size="large"
                onClick={() => {
                  questionCounter();
                  randomNumber();
                  handleSearch();
                }}
                sx={{
                  width: '200px',
                  marginTop: '20px',
                }}>
                Next
              </Button>
            )
          ) : (
            <Button className="game-button" variant="contained" size="large" onClick={submitQuestion}
            sx={{
              width: '200px',
              marginTop: '20px',
            }}>Guess</Button>
          )}
         
        </div>
      </Paper>
    );
  } else {
    return (
      <div className='loading'>
       <h1>Loading</h1>
        <img 
              src="/images/pokeball.png"
              alt="loading"
              className="pokeball"
            />
       </div>
    )}
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
}


export default QuizForm;
