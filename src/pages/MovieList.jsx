import React from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const MovieList = ({ apiPath }) => {
  const { data: movies, loading } = useFetch(apiPath);

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
                        height="450"
                        // Adjust the height as needed to fit the image
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
