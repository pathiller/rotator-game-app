import React, {useState} from 'react';
import Form from './components/form';
import Game from './components/game';
import './App.css';

const App = () => {
  const [username, setUsername] = useState(null)
  if (!username) {
    return (
      <div className="app">
        <Form setUsername={setUsername}  />
      </div>
    );
  }
  else {
    return (
      <div className="app">
        <Game username={username} />
      </div>
    );
  }

}

export default App;
