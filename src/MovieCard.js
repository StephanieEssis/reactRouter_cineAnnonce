import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2> {/* title au lieu de titre */}
      <img src={movie.posterURL} alt={movie.title} />
      <p>Note: {movie.rating}</p> {/* rating au lieu de note */}
      <Link to={`/movie/${movie.id}`}>Voir les détails</Link>
    </div>
  );
};

export default MovieCard;