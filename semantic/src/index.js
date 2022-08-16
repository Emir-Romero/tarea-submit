import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
