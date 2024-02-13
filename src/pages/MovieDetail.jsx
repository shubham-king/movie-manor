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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details.");
        }
        const json = await response.json();
        setMovie(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchMovie();
  }, [params.id]);

  if (loading) {
    return (
      <Typography
        variant="body2"
        sx={{ display: "flex", justifyContent: "center", fontSize: 18 }}
      >
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center", fontSize: 18 }}
      >
        Error: {error}
      </Typography>
    );
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
          <Box height="100%">
            <Card>
              <CardContent
                sx={{
                  backgroundColor: "rgba(12,20,255,0.1)",
                  border: "none",
                  borderRadius: "0",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ flexWrap: "wrap" }}
                >
                  {movie.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 16, py: 1 }}
                  color="text.secondary"
                >
                  {movie.overview}
                </Typography>
                <Box sx={{ py: 1 }}>
                  {movie.genres && movie.genres.length > 0 && (
                    <Typography
                      gutterBottom
                      variant="body2"
                      sx={{ fontWeight: "bold", fontSize: 16 }}
                    >
                      Genres:{" "}
                      {movie.genres.map((genre) => (
                        <Typography
                          key={genre.id}
                          style={{
                            marginRight: "4px",
                            border: "1px solid #ccc",
                            padding: "2px",
                            borderRadius: "4px",
                            display: "inline-block",
                            background: "rgba(49, 82, 189, 0.5)", // Fixed typo in rgba
                          }}
                        >
                          {genre.name}
                        </Typography>
                      ))}
                    </Typography>
                  )}
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ fontWeight: "bold", fontSize: 16 }}
                    component="div"
                  >
                    Runtime: {movie.runtime} minutes
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ fontWeight: "bold", fontSize: 16 }}
                    component="div"
                  >
                    Budget: ${movie.budget}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ fontWeight: "bold", fontSize: 16 }}
                    component="div"
                  >
                    Revenue: ${movie.revenue}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ fontWeight: "bold", fontSize: 16 }}
                    component="div"
                  >
                    Release Date: {movie.release_date}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;
