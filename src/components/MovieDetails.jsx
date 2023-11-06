import React from 'react';

const MovieDetails = () => {
  // Simulated movie data, replace with data fetched from your API
  const movie = {
    title: 'Movie 1',
    description: 'Description of Movie 1.',
    director: 'Director 1',
    price: 9.99,
    rating: 4.5,
  };

  const addToCart = () => {
    // Implement your logic to add this movie to the cart
    console.log(`Added ${movie.title} to the cart`);
  };

  return (
    <div className="movie-details">
      <h1>{movie.title} Details</h1>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Price: ${movie.price}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default MovieDetails;
