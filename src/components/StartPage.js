import React from 'react'
import "./startPage.css";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<>
    <Paper elevation={3} variant="outlined">
    <div className="container">
        <img className="start-image" src="/images/whothatlogo2.png" alt="Who's that" />
        <Link to="/quiz">
          <Button variant="contained" size="large">
            Start the game
          </Button>
        </Link>
        {/* <img className="pickachiu" src="/images/picachiu.png" alt="pickachiu"/> */}
    </div>
    </Paper>
   </> 
  )
}

export default StartPage