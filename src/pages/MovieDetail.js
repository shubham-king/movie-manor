import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

const MovieDetail = ({ movie }) => {
  return (
    <Container sx={{ padding: "36px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.original_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default MovieDetail;
