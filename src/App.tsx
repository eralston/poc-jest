import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MicRecorderButton from "./MicRecorderButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>This is a default create-react-app on purpose. Check out App.test.tsx for unit testing demo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Here, try this record button: <MicRecorderButton /></p>
      </header>
    </div>
  );
}

export default App;
