import { useContext } from "react";
import { ContextData } from "../store/ContextMovie";
import style from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import { API_KEY } from "../store/requests";
export default function MovieList() {
  const keyApi = API_KEY;
  const {
    originals,
    trending,
    topRated,
    action,
    comedy,
    horror,
    romance,
    documentaries,
  } = useContext(ContextData);

  return (
    <div className={style.movieListContainer}>
      <MovieItem movies={originals} isPoster={true} api={keyApi} />
      <MovieItem
        movies={trending}
        isPoster={false}
        title="Trending"
        api={keyApi}
      />
      <MovieItem
        movies={topRated}
        isPoster={false}
        title="Top Rated"
        api={keyApi}
      />
      <MovieItem movies={action} isPoster={false} title="Action" api={keyApi} />
      <MovieItem movies={comedy} isPoster={false} title="Comedy" api={keyApi} />
      <MovieItem movies={horror} isPoster={false} title="Horror" api={keyApi} />
      <MovieItem
        movies={romance}
        isPoster={false}
        title="Romance"
        api={keyApi}
      />
      <MovieItem
        movies={documentaries}
        isPoster={false}
        title="Documentaries"
        api={keyApi}
      />
    </div>
  );
}
