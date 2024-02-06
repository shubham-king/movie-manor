import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params.id]);

  if (!movie.title) {
    return <p>Loading...</p>;
  }

  return (
    <Container sx={{ maxHeight: "100%" }}>
      <Grid container spacing={2} sx={{ mb: 9 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : ""
              }
              alt={movie.title}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box height="100">
            <Card>
              <CardContent md={{ border: "none", borderRadius: "0" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ flexWrap: "wrap" }}
                >
                  {movie.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {movie.overview}
                </Typography>
                {movie.genres && movie.genres.length > 0 && (
                  <Typography gutterBottom variant="h6">
                    <b>Genres:</b>{" "}
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        style={{
                          marginRight: "4px",
                          border: "1px solid #ccc",
                          padding: "2px",
                          borderRadius: "4px",
                          display: "inline-block",
                          background: "rgb(150,150,150)",
                        }}
                      >
                        {genre.name}
                      </span>
                    ))}
                  </Typography>
                )}
                <Typography gutterBottom variant="h" component="div">
                  <b>Runtime:</b> {movie.runtime} minutes
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <b>Budget:</b> ${movie.budget}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <b>Revenue:</b> ${movie.revenue}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <b>Release Date:</b> {movie.release_date}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;
