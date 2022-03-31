import React, { useEffect, useState } from "react";
import "./quizForm.css";

function QuizForm() {
  const [data, setData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [pokemonNumber, setPokemonNumber] = useState();

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
    return (    
      <div className="quizForm">
        <div className="infos">
          <p>Points: 0</p>
          <p>Question Number: {questionNumber}</p>
          <p>{pokemonNumber}</p>
          <p>{data.results[pokemonNumber].name}</p>
        </div>
        {submitted
          ? <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`}  alt="Real IMage"></img>
          : <div className='silhouette'><img  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png` } alt="Silhouette"></img></div>
        }
        <input></input>
        {submitted
          ? <button onClick={()=>{questionCounter(); randomNumber();} }>Next</button>
          : <button onClick={submitQuestion}>Submit</button>
        }
      </div>
    );
  } else {
    return (
      <h1>Loading</h1>
    );
  }

}

export default QuizForm;
