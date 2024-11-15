import { useState } from "react";
import NavBar from "../browse/Navbar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import style from "./Search.module.css";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fdc0f678bb844493bee1a7e44319418d&language=en&query=${query}`
    );
    const data = await response.json();
    setMovies(data.results);
  };
  const handleReset = () => {
    setMovies([]);
  };
  return (
    <div className={style.search}>
      <NavBar />
      <div className={style.content}>
        <SearchForm onSearch={handleSearch} onReset={handleReset} />
        {movies.length > 0 && <ResultList movies={movies} />}
      </div>
    </div>
  );
};

export default Search;
