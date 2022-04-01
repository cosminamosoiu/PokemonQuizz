import React, { useEffect, useState } from "react";
import "./quizForm.css";
import EndPage from './EndPage';

function QuizForm() {
  const [data, setData] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [pokemonNumber, setPokemonNumber] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [points, setPoints] = useState(0);

  useEffect(async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&&limit=150')
      .then(res => {
        return res.json();
      })
      .then(data => {
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
          </div>

          {submitted ? (
            <div>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}
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
              setInputValue(e.target.value);
            }}
          />
          {submitted ? (
            questionNumber === 10 ? (
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
}


export default QuizForm;
