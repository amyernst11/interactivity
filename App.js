import React, { useState } from 'react';
import './App.css';

function App() {

    return (
      <div className="App">
        <header className="App-header">
          <ExampleInteraction />   
        </header>
      </div>
    );

}

function ExampleInteraction() {
  // Declare a new state variable, which we'll call "count"
  const [normal, setNormal] = useState(true);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  function handleClick() {
    setNormal(false);
    setFirst(true);
  } 

    return (
    <div>
      <button className="hotbutton" onClick={handleClick}>
        First button
      </button>
      <button className="hotbutton" onClick={handleClick}>
          Second button
      </button>
      <button className="hotbutton" onClick={handleClick}>
          Third button
      </button>
      <p>
          {String(normal)}
      </p>
    </div>
  );

if (setFirst==true) {
    return (
        <button className="changedbutton">
        </button>
    );
} else {
      return( 
          <button className="hotbutton"></button>
      )
  }
} 


export default App;
