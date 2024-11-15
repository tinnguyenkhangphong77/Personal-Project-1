import { useEffect, useState } from "react";
import style from "./MovieDetail.module.css";
export default function MovieDetail({ movieData, apiKey }) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        const trailer = data.results.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser")
        );
        setTrailerKey(trailer ? trailer.key : null);
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieData, apiKey]);

  return (
    <div className={style.movieDetail}>
      <div className={style.description}>
        <h2>{movieData.title || movieData.name}</h2>
        <p>Release: {movieData.release_date || movieData.first_air_date}</p>
        <p>Vote: {movieData.vote_average}</p>
        <p>{movieData.overview}</p>
      </div>
      {trailerKey ? (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailerKey}`}
        ></iframe>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
          alt={movieData.title || movieData.name}
        />
      )}
    </div>
  );
}
