import React, { useState } from 'react';
import Login from './Components/Login/Login.js';
import Panel from './Components/Panel/Panel.js';
import './App.css';

const App = () => {
  let [username, setUsername] = useState(null);
  const onLogin = (e) =>{
    setUsername(e);
  }
  return (
    username === null ?
    <div>
      <Login onLogin = {onLogin}/>
    </div>
    :
    <div>
    <h1 style = {{textAlign:'center'}}> Logged in as {username} </h1>
    <Panel username = {username}/> 

    </div>
  );
}

export default App;
