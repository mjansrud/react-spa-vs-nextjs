import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Orders</title>
        <meta name="description" content="Some order description ..." />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Orders page</p>
        <Link className="App-link" to="/">
          Go back
        </Link>
      </header>
    </div>
  );
}

export default App;
