import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Backup from "../assets/images/backup.png";

const MovieCard = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgba(255, 255, 255)",
        borderRadius: "16px",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <MuiLink component={Link} to={`/movie/${id}`}>
        <CardMedia component="img" height="200" image={image} alt="" />
      </MuiLink>
      <CardContent>
        <MuiLink component={Link} to={`/movie/${id}`}>
          <Typography
            variant="h5"
            mb={2}
            sx={{ fontWeight: "bold", color: "#212121" }}
          >
            {original_title}
          </Typography>
        </MuiLink>
        <Typography variant="body2" mb={3} sx={{ color: "#616161" }}>
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
