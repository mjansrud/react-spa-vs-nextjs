import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import Todos from "./pages/todos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
