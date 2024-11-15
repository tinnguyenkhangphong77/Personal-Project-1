import { useState } from "react";
import style from "./MovieItem.module.css";
import MovieDetail from "./MovieDetail";

export default function MovieItem({ movies, isPoster, title, api }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null); // id trùng thì set lại null để unmount MovieDetail
    } else {
      setSelectedMovie(movie);
    }
  };

  const renderMovies = () => {
    return movies.results.map((movie) => (
      <div
        className={isPoster ? style.posterItem : style.backdropItem}
        key={movie.id}
        onClick={() => handleMovieClick(movie)}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${
            isPoster ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name || movie.title}
        />
      </div>
    ));
  };

  return (
    <div className={style.movieSection}>
      {title && <h2>{title}</h2>}
      <div className={!isPoster ? style.movieRow : style.movieRowOriginals}>
        {movies.results && renderMovies()}
      </div>
      {selectedMovie && <MovieDetail movieData={selectedMovie} apiKey={api} />}
    </div>
  );
}
