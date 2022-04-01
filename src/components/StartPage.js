import React from 'react'
import "../styles/startPage.css";
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';

function StartPage() {
  return (
<>
    <Paper elevation={3}>
    <div className="container">
        <img className="start-image" src="/images/whothatlogo.png" alt="Who's that" />
        <Button variant="contained" size="large"
        sx={{
          width: '300px',
          marginTop: '20px',
          fontSize: '25px'
        }}>
          Start the game
        </Button>
    </div>
    </Paper>
   </> 
  )
}

export default StartPage