import SearchPopup from "../../components/search/searchPopup";
import SearchList from "../../components/search/searchList";
import Navbar from "../../components/navbar";
import data from "../../data/search.json";
const Search = () => {
  return (
    <>
      <header className="Main-Header">
        <Navbar />
      </header>
      <article className="search grid">
        <SearchPopup />
        <SearchList data={data} />
      </article>
    </>
  );
};

export default Search;
