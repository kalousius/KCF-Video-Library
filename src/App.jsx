import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieCatalog from './components/MovieCatalog';
import MovieDetails from './components/MovieDetails';
import Signln from './components/Signln';
import Cart from './components/Cart';
import Register from './components/Register';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Example: Make a GET request using Axios
    axios.get('http://localhost:4000/data') // Replace with the actual API URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run this effect only once on component mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} end />
        <Route path="/catalog" element={<MovieCatalog />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/sign" element={<Signln />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
