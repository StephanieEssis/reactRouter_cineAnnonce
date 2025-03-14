import React from "react";
import MovieCard from "../MovieCard";  // Erreur si le fichier est `MovieCard.js`


const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;


