import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=23b631df0322d474f7811f15a02c4a86"
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <Box
      sx={{
        paddingX: "6em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <Typography variant="h6">Loading...</Typography>
        ) : (
          <Grid container spacing={2}>
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Card sx={{ maxWidth: 345, height: "100%" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200" // Adjust the height as needed
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontWeight: "bold" }}
                        >
                          {movie.original_title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {movie.overview}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default MovieList;

/*

23b631df0322d474f7811f15a02c4a86

Individual
https://api.themoviedb.org/3/movie/{movie_id}?api_key=23b631df0322d474f7811f15a02c4a86

Now Playing:
https://api.themoviedb.org/3/movie/now_playing?api_key=23b631df0322d474f7811f15a02c4a86

Popular:
https://api.themoviedb.org/3/movie/popular?api_key=23b631df0322d474f7811f15a02c4a86

Top Rated:
https://api.themoviedb.org/3/movie/top_rated?api_key=23b631df0322d474f7811f15a02c4a86

Upcoming:
https://api.themoviedb.org/3/movie/upcoming?api_key=23b631df0322d474f7811f15a02c4a86

Search:
https://api.themoviedb.org/3/search/movie?api_key=23b631df0322d474f7811f15a02c4a86&query={movie_name}


// useFetch.jsx;
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchmovies();
  }, [url])

  return {data}
}

*/
