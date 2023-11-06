import React from 'react';
import { NavLink } from 'react-router-dom'; // Add this line to import NavLink
import './Home.css';

const Home = () => {
  // Simulated movie data
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description of Movie 1.',
      price: 2000,
      image: 'movie1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description of Movie 2.',
      price: 2000,
      image: 'movie2.jpg',
    },
    {
      id: 3,
      title: 'Movie 3',
      description: 'Description of Movie 2.',
      price: 2000,
      image: 'movie3.jpg',
    },
    {
      id: 4,
      title: 'Movie 4',
      description: 'Description of Movie 2.',
      price: 2000,
      image: 'movie4.jpg',
    },

    {
      id: 5,
      title: 'Movie 5',
      description: 'Description of Movie 5.',
      price: 2000,
      image: 'movie5.jpg',
    },
    {
      id: 6,
      title: 'Movie 6',
      description: 'Description of Movie6.',
      price: 2000,
      image: 'movie6.jpg',
    },
    {
      id: 7,
      title: 'Movie 7',
      description: 'Description of Movie 7.',
      price: 2000,
      image: 'movie7.jpg',
    },
    {
      id: 8,
      title: 'Movie 8',
      description: 'Description of Movie 8.',
      price: 2000,
      image: 'movie8.jpg',
    },
    {
      id: 9,
      title: 'Movie 9',
      description: 'Description of Movie 9.',
      price: 2000,
      image: 'movie9.jpg',
    },
    {
      id: 10,
      title: 'Movie 10',
      description: 'Description of Movie 10.',
      price: 2000,
      image: 'movie10.jpg',
    },
    {
      id: 11,
      title: 'Movie 11',
      description: 'Description of Movie 11.',
      price: 2000,
      image: 'movie11.jpg',
    },
    {
      id: 12,
      title: 'Movie 12',
      description: 'Description of Movie 12.',
      price: 2000,
      image: 'movie12.jpg',
    },
    
    // Add more movie objects as needed
  ];

  const generateTable = () => {
    const table = [];
    let id = 1; // Initial movie ID

    for (let row = 0; row < 6; row++) {
      const cells = [];
      for (let col = 0; col < 6; col++) {
        if (id <= movies.length) {
          const movie = movies[id - 1];
          cells.push(
            <td key={id}>
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <p>Price: Ushs:{movie.price}</p>
            </td>
          );
          id++;
        } else {
          cells.push(<td key={id}></td>); // Empty cell
          id++;
        }
      }
      table.push(<tr key={row}>{cells}</tr>);
    }

    return table;
  };

  return (
    <div className="home-container">
      <div className="menu-bar">
        <NavLink to="/" activeClassName="active-link" end>
          Home
        </NavLink>
        <NavLink to="/catalog" activeClassName="active-link">
          Catalog
        </NavLink>
        <NavLink to="/sign" activeClassName="active-link">
          Sign In
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link">
          Contact Us
        </NavLink>
      </div>
      <h1>Welcome to KCF-Video Library</h1>
      <p>Explore our collection of movies and order your favorites today!</p>
      <button onClick={() => {/* Navigate to Movie Catalog */}}>
        Browse Movies
      </button>
      <table className="movie-table">
        <tbody>{generateTable()}</tbody>
      </table>
      <footer className="footer">
        <p>&copy; 2023 KCF-Video Library</p>
      </footer>
    </div>
  );
};

export default Home;