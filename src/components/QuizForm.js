import React, { useEffect, useState } from "react";
import "../styles/quizForm.css";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button'

function QuizForm() {
  const [data, setData] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [pokemonNumber, setPokemonNumber] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&&limit=150")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
          </div>

          {submitted ? (
            <div>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}
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
              setInputValue(e.target.value);
            }}
          />
          {submitted ? (
            questionNumber === 10 ? (
              <Button className="game-button" variant="contained" size="large" onClick={() => handleSearch()} 
              sx={{
                width: '200px',
                marginTop: '20px',
              }}>End Game</Button>
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
}

export default QuizForm;
