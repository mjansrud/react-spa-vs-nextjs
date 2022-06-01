import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useSWR from "swr";
import "./index.css";
interface DummyData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetcher = () =>
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json()
  );

function App() {
  const { data, error } = useSWR<DummyData>("dummy-data", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <Helmet>
        <title>Orders - {data.title}</title>
        <meta name="description" content="Some orders description ..." />
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
