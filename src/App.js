/** @format */

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary </header>

        <main>
          <Dictionary defaultKeyword="twilight" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/Joanafgg"
            target="_blank"
            rel="noreferrer"
          >
            Joana Garcia
          </a>{" "}
          with 🩷 and is open-sourced on{" "}
          <a
            href="https://github.com/Joanafgg/dictionary-project"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
