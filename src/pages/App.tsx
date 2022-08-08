import NavBar from '../comps/NavBar';
import pentagon from '../public/PolygonBl.svg';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
        <div className="container">
          <div className="impact-header2">GO BUILD STUFF</div>
        </div>

        <div className="container">
          <div className="impact-header">Starting is the hardest part.</div>
        </div>

        <img src={pentagon} className="App-logo" alt="logo" />
      </div>
      <div className="container">
        <div className="centered">hello world</div>
      </div>
    </div>
  );
}

export default App;
