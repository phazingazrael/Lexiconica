import React, { useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Markdown from "markdown-to-jsx";

function App() {
  const file_name = "changelog.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`./markdown/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Markdown>{post}</Markdown>
    </div>
  );
}

export default App;
