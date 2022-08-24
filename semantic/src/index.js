import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import IndexElements from "./Elements/index_elements";
import IndexColections from "./Colections/index_colections";
import IndexViews from "./Views/index_views";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Login"></Route>
        <Route path="/Elements" element={<IndexElements />}></Route>
        <Route path="/Colections" element={<IndexColections />}></Route>
        <Route path="/Views" element={<IndexViews />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
