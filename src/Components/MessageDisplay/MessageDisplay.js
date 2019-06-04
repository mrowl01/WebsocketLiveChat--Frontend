import React, { useState } from 'react';
import './MessageDisplay.css';


  const MessageDisplay = (props) => {


  return (

    <div>
    {console.log(props.data)}
      {props.data.map(user=> <div id='messages'><div> {user} </div></div>)}
    </div>
  );
}

export default MessageDisplay;

