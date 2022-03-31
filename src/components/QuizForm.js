import React, { useEffect, useState } from "react";
import "./quizForm.css";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

function QuizForm() {
  const [data, setData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [pokemonNumber, setPokemonNumber] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&&limit=150')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  const questionCounter = () => {
    setQuestionNumber(questionNumber + 1);
    setSubmitted(false);
  }

  const submitQuestion = () => {
    setSubmitted(true);
  }


  const randomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 151);
    if(randomNumber < 10 ){
      randomNumber = `00${randomNumber}`;
    }else{
      if(randomNumber>10 &&randomNumber<100){
        randomNumber = `0${randomNumber}` 
      }
    }
    setPokemonNumber(randomNumber);
  }



  if(data != null) {
    if(pokemonNumber === null){
      randomNumber()
    }
    return (    
      <Paper elevation={3} variant="outlined">
      <div className="container">
       {submitted
        ? <img src="/images/pokemonis.png" alt="who's that pokemon?" className="who-that-pokemon-image"/>
        : <img src="/images/whosthatpoke.png" alt="who's that pokemon?" className="who-that-pokemon-image"/>
       }
        <div className="infos">
          <p>Points: 0</p>
          <p>Question Number: {questionNumber}</p>
          <p>{pokemonNumber}</p>
          <p>{pokemonNumber
                ? data.results[parseInt(pokemonNumber - 1, 10)].name
                : ''} </p>
        </div>
        {submitted
          ? <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}  alt="Real IMage"></img>
          : <div className='silhouette'><img  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png` } alt="Silhouette"></img></div>
        }
        <input></input>
        {submitted
          ? <Button variant="contained" size="large" onClick={()=>{questionCounter(); randomNumber();} }>Next</Button>
          : <Button variant="contained" size="large" onClick={submitQuestion}>Submit</Button>
        }
      </div>
      </Paper>
    );
  } else {
    return (
      <h1>Loading</h1>
    );
  }

}

export default QuizForm;
