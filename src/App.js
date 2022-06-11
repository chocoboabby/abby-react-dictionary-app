import dictionarylogo from "./dictionarylogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={dictionarylogo} className="app-logo img-fluid" alt="logo" />
        </header>
        <div>
          <Dictionary defaultKeyword="cat" />
        </div>
        <div>
          <a
            className="App-link"
            href="https://github.com/chocoboabby/abby-react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small> Open source code</small>
          </a>{" "}
          <span>
            <small>by Abby Dela Fuente</small>
          </span>
          <br />
          <a
            href="https://www.flaticon.com/free-icons/dictionary"
            title="dictionary icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small>Dictionary icons created by Freepik - Flaticon</small>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
