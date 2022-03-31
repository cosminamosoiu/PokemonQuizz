import React from 'react'
import "./endPage.css"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function EndPage() {
  return (
    <Paper elevation={3} variant="outlined">
    <div className="container">
            <img className="good-job" src="/images/goodjob.png"/>
            <div className="end-points">50 points</div>
            <Button variant="contained" size="large"> Play again!</Button>
        <img className="final-picachiu" src="/images/pikahat.png"/>
        
    </div>
    </Paper>
  )
}

export default EndPage