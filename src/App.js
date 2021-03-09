import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Greeting from "./Greeting";
import PersonList from "./PersonTable";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="World" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <PersonList list={["Abdul Fatah", "Khalid", "Farhan"]} />
        <Button>Simple Button</Button>
      </header>
    </div>
  );
}

export default App;
