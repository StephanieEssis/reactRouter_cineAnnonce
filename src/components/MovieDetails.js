import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Film non trouvé</h2>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p> 
      <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDetails;
