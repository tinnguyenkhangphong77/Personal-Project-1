import { useState, useEffect, useContext } from "react";
import { ContextData } from "../store/ContextMovie";
import style from "./Banner.module.css";
export default function Banner() {
  const { originals } = useContext(ContextData);

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (originals.results && originals.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * originals.results.length);
      setMovie(originals.results[randomIndex]);
    }
  }, [originals]);

  return (
    <div
      className={style.banner}
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
      }}
    >
      <div className={style.content}>
        {movie && (
          <div>
            <h1 className={style.title}>{movie.name}</h1>
            <button className={style.button}>Play</button>
            <button className={style.button}>My List</button>
            <p className={style.description}>
              {movie.overview || "No Information"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
