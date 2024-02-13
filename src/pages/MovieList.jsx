// MovieList.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const { data: movies, loading, error } = useFetch(apiPath);
  const [maxTextLength, setMaxTextLength] = useState(150);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  const handleReadMore = () => {
    setMaxTextLength((prev) => (prev === 150 ? 10000 : 150));
  };

  // Animation variants
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        paddingX: "6em",
        paddingBottom: "6em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        {loading && (
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              fontSize: 18,
            }}
          >
            Loading...
          </Typography>
        )}
        {error && (
          <Typography variant="h6" color="error">
            Error: {error.message}
          </Typography>
        )}
        {!loading && !error && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            sx={{ justifyContent: "center" }}
          >
            <Grid container spacing={3}>
              {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
                  <motion.div
                    variants={item}
                    style={{ height: "100%" }}
                    whileHover={{ scale: 1.05 }}
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
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="400"
                          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.original_title}
                        />
                        <CardContent
                          sx={{
                            padding: 2,
                            flex: 1,
                            backgroundColor: "rgba(12,20,255, 0.1)",
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
                              {maxTextLength === 150
                                ? " Read more"
                                : " Read less"}
                            </MuiLink>
                          </Typography>
                        </CardContent>
                      </Card>
                    </MuiLink>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default MovieList;
