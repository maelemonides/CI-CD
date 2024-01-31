// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import HealthCheck from './components/HealthCheck';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">List Products</Link>
            </li>
            <li>
              <Link to="/health">Health Check</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products" element={<ListProducts />} />
          <Route path="/health" element={<HealthCheck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
