import React from 'react';

const MovieCatalog = () => {
  // Simulated movie data, replace with data fetched from your API
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description of Movie 1.',
      price: 9.99,
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description of Movie 2.',
      price: 7.99,
      rating: 4.2,
    },
    // Add more movie objects as needed
  ];

  const addToCart = (movie) => {
    // You can implement cart functionality here, e.g., adding the selected movie to the cart state.
    // Replace this with your own cart management logic.
    console.log(`Added ${movie.title} to the cart`);
  };

  const viewDetails = (movie) => {
    // You can implement the view details functionality here, e.g., navigating to a movie details page.
    // Replace this with your own logic to view movie details.
    console.log(`Viewing details of ${movie.title}`);
  };

  return (
    <div className="movie-catalog">
      <h1>Movie Catalog</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`movie_images/${movie.id}.jpg`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Price: ${movie.price}</p>
            <p>Rating: {movie.rating}</p>
            <button onClick={() => addToCart(movie)}>Add to Cart</button>
            <button onClick={() => viewDetails(movie)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCatalog;
