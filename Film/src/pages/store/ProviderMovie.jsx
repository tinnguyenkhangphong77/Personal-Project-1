import { useState, useEffect } from "react";
import { ContextData } from "./ContextMovie";
import { BASE_URL, requests } from "./requests";

export default function ProviderMovie({ children }) {
  const [movies, setMovies] = useState({
    originals: {},
    trending: {},
    topRated: {},
    action: {},
    comedy: {},
    horror: {},
    romance: {},
    documentaries: {},
    search: {},
  });
  useEffect(() => {
    fetchMovies();
    async function fetchMovies() {
      const fetchData = async (url) => {
        try {
          const response = await fetch(`${BASE_URL}${url}`);
          const data = await response.json();
          return data;
        } catch (err) {
          throw Error(err);
        }
      };
      setMovies({
        originals: await fetchData(requests.fetchNetflixOriginals),
        trending: await fetchData(requests.fetchTrending),
        topRated: await fetchData(requests.fetchTopRated),
        action: await fetchData(requests.fetchActionMovies),
        comedy: await fetchData(requests.fetchComedyMovies),
        horror: await fetchData(requests.fetchHorrorMovies),
        romance: await fetchData(requests.fetchRomanceMovies),
        documentaries: await fetchData(requests.fetchDocumentaries),
        search: await fetchData(requests.fetchSearch),
      });
    }
  }, []);
  console.log(movies);
  return <ContextData.Provider value={movies}>{children}</ContextData.Provider>;
}
