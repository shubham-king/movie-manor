import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Remove the extra double quote at the end of the URL
  const url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=23b631df0322d474f7811f15a02c4a86`;

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
