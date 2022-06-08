import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Dictionary defaultKeyword="love" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
