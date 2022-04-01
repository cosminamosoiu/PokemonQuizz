import React from 'react'
import "../styles/startPage.css";
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<>
    <Paper elevation={3}>
    <div className="container">

        <img className="start-image" src="/images/whothatlogo2.png" alt="Who's that" />
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
}

export default StartPage