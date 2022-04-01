import React from 'react'
import "../styles/endPage.css"
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function EndPage(props) {
  return (
    <Paper elevation={3}>
    <div className="container">
            <img className="good-job" src="/images/goodjob.png"/>
            <div className="end-points">{props.totalPoints} points</div>
            <Link to="/quiz">
            <Button variant="contained" size="large"
            sx={{
                width: '200px',
                marginTop: '20px',
              }}> Play again!</Button>        
    </Link>
    </div>
    </Paper>
  )
}

export default EndPage