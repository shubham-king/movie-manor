import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  Typography,
  Box,
  Grid,
  CardContent,
  CardMedia,
  Card,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

export const MovieList = ({ apiPath }) => {
  const { data: movies, loading } = useFetch(apiPath);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  const [maxTextLength, setMaxTextLength] = useState(150);

  const handleReadMore = () => {
    setMaxTextLength((prev) => (prev === 150 ? 10000 : 150));
  };

  return (
    <Box
      sx={{
        paddingX: "6em",
        paddingY: "2em",
        display: "flex",
        justifyContent: "center", // Center the entire content
      }}
    >
      <Box
        sx={{
          width: "100%", // Make sure the content takes full width
        }}
      >
        {loading ? (
          <Typography variant="h6">Loading...</Typography>
        ) : (
          <Grid container spacing={6} sx={{ justifyContent: "center" }}>
            {movies.map((movie) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={movie.id}
                sx={{ maxWidth: "345px" }}
              >
                <MuiLink
                  component={Link}
                  to={`/movie/${movie.id}`}
                  underline="none"
                >
                  <Card
                    sx={{
                      minHeight: "100%",
                      maxHeight: "100%",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="auto"
                      width="100%"
                      image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                    <CardContent
                      sx={{
                        padding: 2,
                        flex: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {movie.original_title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {truncateText(movie.overview, maxTextLength)}
                        <MuiLink
                          component="span"
                          onClick={handleReadMore}
                          sx={{ cursor: "pointer" }}
                        >
                          {maxTextLength === 110 ? " Read more" : " Read less"}
                        </MuiLink>
                      </Typography>
                    </CardContent>
                  </Card>
                </MuiLink>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default MovieList;
