import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import IndexElements from "./Elements/IndexElements";
import IndexColections from "./Colections/IndexColections";
import IndexViews from "./Views/IndexViews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" ></Route>
        <Route path="/Elements" element={<IndexElements/>}></Route>
        <Route path="/Colections" element={<IndexColections/>}></Route>
        <Route path="/Views" element={<IndexViews/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
