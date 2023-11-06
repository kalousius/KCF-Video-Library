import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieCatalog from './components/MovieCatalog';
import MovieDetails from './components/MovieDetails';
import Signln from './components/Signln';
import Cart from './components/Cart';
import Register from './components/Register'; // Import the Register component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieCatalog />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/sign" element={<Signln />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} /> {/* Add the registration route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
