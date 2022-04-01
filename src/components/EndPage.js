import React from 'react'
import "../styles/endPage.css"
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';

function EndPage() {
  return (
    <Paper elevation={3}>
    <div className="container">
            <img className="good-job" src="/images/goodjob.png"/>
            <div className="end-points">50 points</div>
            <Button variant="contained" size="large"
            sx={{
                width: '200px',
                marginTop: '20px',
              }}> Play again!</Button>        
    </div>
    </Paper>
  )
}

export default EndPage