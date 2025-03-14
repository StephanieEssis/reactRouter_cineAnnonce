import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import moviesData from "./Movies"; // Import des films

function App() {
  const [movies, setMovies] = useState(moviesData); // Stocke la liste des films

  return (
    <Router>
      <Routes>
      <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />

        <Route path="/" element={<MovieList movies={movies} />} /> {/* Passer movies */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
