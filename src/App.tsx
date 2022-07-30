import { useState } from 'react';
import pentagon from './PolygonBl.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="impact-header2">GO BUILD STUFF</div>
        </div>

        <img src={pentagon} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="centered">hello world</div>
      </div>
    </div>
  );
}

export default App;
