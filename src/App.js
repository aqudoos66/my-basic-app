import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Visitor');
  const [darkMode, setDarkMode] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h1>Welcome to My Basic React App</h1>
        
        <div className="mode-toggle">
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
        
        <div className="greeting">
          <p>Hello, {name}!</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        
        <div className="counter">
          <h2>Counter: {count}</h2>
          <div className="buttons">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
        
        <div className="features">
          <h3>Features in this app:</h3>
          <ul>
            <li>Counter with increment/decrement</li>
            <li>Name input that updates greeting</li>
            <li>Dark/light mode toggle</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;