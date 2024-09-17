import React, { useState, useEffect } from "react";

// MovieCard component
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

// MovieList component
function MovieList({ movies, filter }) {
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
    );
  });

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// Filter component
function Filter({ setFilter }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleFilterChange = () => {
    setFilter({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <select
        value={ratingFilter}
        onChange={(e) => setRatingFilter(parseInt(e.target.value))}
      >
        <option value={0}>All</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}

// App component
function App() {
  const [movies, setMovies] = useState([
    // Add your initial movie data here
    {
      id: 1,
      title: "Deadpool vs. Wolverine",
      description: "Description for Movie 1",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "Lion King",
      description: "Description for Movie 1",
      posterURL: "https://images.moviesanywhere.com/c07276e9473360730fdbc94baebc4236/4692c964-61ba-486d-9c77-939dbfba2f07.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Ghost Rider",
      description: "Description for Movie 1",
      posterURL: "https://www.dafont.com/img/illustration/g/h/ghost_rider_movie.jpg",
      rating: 2,
    },
    {
      id: 4,
      title: "Kingsman: The Secret Service",
      description: "Description for Movie 1",
      posterURL: "https://images.moviesanywhere.com/a0e732eefc3d7071ac59b3b069620e3a/bccc6601-d468-4b73-9a8e-f407bd0be191.jpg",
      rating: 3,
    },
    {
      id: 5,
      title: "King of Boys",
      description: "Description for Movie 1",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYTVjMmM0MGYtOTU5Yy00MTRmLTlhZGMtZGMwOTE4MGNmZmE1XkEyXkFqcGdeQXVyMTM1NTMwNTA2._V1_.jpg",
      rating: 5,
    },
    // ... more movie data
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  useEffect(() => {
    // Fetch movie data from an API if needed
    // ...
  }, []);

  return (
    <div className="app">
      <Filter setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} />
      {/* Add a form to add new movies */}
    </div>
  );
}

export default App;
