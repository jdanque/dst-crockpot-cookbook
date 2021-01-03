import logo from './Favicon.ico';
import './App.css';

function App() {
  return (
    <div className="App">
      { console.log("Hello world") }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
      </header>
    </div>
  );
}

export default App;
