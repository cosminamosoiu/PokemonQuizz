import React from 'react'

function Image(props) {
  
  if(props.submitted) {
    return (
      <img src={props.source}></img>
    );
  } else {
    return (
      <p>Silouette</p>
    );
  }
}

export default Image;