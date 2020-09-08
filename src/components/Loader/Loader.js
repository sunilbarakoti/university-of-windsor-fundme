import React from 'react';
import './Loader.css'

function Loader(props){
  return (
    <div className = "spinner">
        <div className = "ui active inverted dimmer">
            <div className = "ui small text loader">{props.text}</div>
        </div>
  </div>
  );
}

Loader.defaultProps = {
    text: 'Loading...'
}

export default Loader;
