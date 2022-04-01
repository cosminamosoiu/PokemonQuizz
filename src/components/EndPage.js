<<<<<<< HEAD
import React from 'react';

const EndPage = ({ points }) => {
  console.log(points);
  return <div>your number of points: {points}</div>;
};

export default EndPage;
=======
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
>>>>>>> 7a4981185a16f1529bc49d1d2b09d190aab317a6
