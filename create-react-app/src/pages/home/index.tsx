import React from "react";
import logo from "./logo.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Some home description ..." />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Create React App</code>
        </p>
        <Link className="App-link" to="/orders">
          Go to orders
        </Link>
      </header>
    </div>
  );
}

export default App;
