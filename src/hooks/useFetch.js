import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchMovies();
  }, [url]);

  return { data, loading };
};
