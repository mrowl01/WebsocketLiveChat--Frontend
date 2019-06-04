import React, { useState } from 'react';

	const Login = (props) => {
	let [username, setUsername] = useState(null);
	const onChange = (e) =>{
		setUsername(e.target.value);
	}
  return (
    <div>
      <h1>Username</h1>
      <input onChange = {onChange}/><br/>
      <button onClick = {e=> props.onLogin(username)} >Submit</button>
    </div>
  );
}

export default Login;
