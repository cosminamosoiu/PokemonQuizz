import React from 'react'
import "../styles/startPage.css";
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<<<<<<< HEAD
    <div>
      <p>StartPage</p>
      <button>Start quiz</button>
    </div>
  );
=======
<>
    <Paper elevation={3}>
    <div className="container">

        <img className="start-image" src="/images/whothatlogo.png" alt="Who's that" />
        <Link to="/quiz">
        <Button variant="contained" size="large"
        sx={{
          width: '300px',
          marginTop: '20px',
          fontSize: '25px'
        }}>
          Start the game
        </Button>
        </Link>
    </div>
    </Paper>
   </> 
  )
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
}

export default StartPage