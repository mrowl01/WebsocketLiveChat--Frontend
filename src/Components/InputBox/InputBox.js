import React, { useState } from 'react';
import './InputBox.css';

	const InputBox = (props) => {



	const onEnter = (e) =>{
		if(e.key === 'Enter') {
      e.preventDefault();
      props.getMessages(e.target.value);
      e.target.value = '';
    }
	}
  return (
    <div>
      <textarea onKeyPress = {onEnter}></textarea>
    </div>
  );
}

export default InputBox;
