import React, { useState, useEffect } from 'react';
import InputBox from '../InputBox/InputBox.js';
import MessageDisplay from '../MessageDisplay/MessageDisplay.js';
import './Panel.css';

	const Panel = (props) => {

    let [messages, setMessages] = useState([]);

    let connection = new WebSocket('ws://localhost:9090/');
    // Updates all of the clients messages ComponentDidCmount
    useEffect(()=>{
      connection.onmessage = (message) => {
        const data = JSON.parse(message.data);
        setMessages(...messages,data);
      }
    },[])

    const handleMessages = (message) => {
      let data = {username:props.username,
                      message:message}

      connection.send(JSON.stringify(data));
    }

  return (
    <div>
    {console.log(messages)}
      <div id='panel'>
        <MessageDisplay data = {messages}/>
      </div>
      <InputBox getMessages = {handleMessages}/>
    </div>
  );
}

export default Panel;
