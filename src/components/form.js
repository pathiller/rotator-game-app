import React, { useRef } from 'react';

const Form = ({setUsername}) => {
  const inputEl = useRef();
  const submitName = (e) => {
    e.preventDefault();
    setUsername(inputEl.current.value);
  }
  return (
    <div className="usernameForm">
      <form onSubmit={submitName}>
        <input placeholder="enter username" ref={inputEl} type="text" />
      </form>
    </div>
  );
}

export default Form;
