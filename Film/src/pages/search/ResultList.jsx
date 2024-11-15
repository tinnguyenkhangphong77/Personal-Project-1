import style from "./ResultList.module.css";
import SearchDetail from "./SearchDetail";
import { useState } from "react";
import { API_KEY } from "../store/requests";
export default function ResultList({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const api = API_KEY;
  const handleMovieClick = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null); // Toggle off if the same movie is clicked again
    } else {
      setSelectedMovie(movie); // Show details of the clicked movie
    }
  };
  return (
    <>
      <div className={style.resultList}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={style.movieItem}
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={style.moviePoster}
            />
            <div className={style.movieTitle}>{movie.title}</div>
          </div>
        ))}
      </div>
      {selectedMovie && <SearchDetail movieData={selectedMovie} apiKey={api} />}
    </>
  );
}
