import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3/";
  const url = `${baseUrl}${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

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
