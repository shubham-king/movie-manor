// useFetch.js
import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3/";
  const url = `${baseUrl}${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true); // Ensure loading state is reset on each call
      setError(null); // Reset error state before fetching
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [url]);

  return { data, loading, error };
};
