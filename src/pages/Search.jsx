import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
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
import { motion } from "framer-motion";
import Backup from "../assets/images/backup.png";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading } = useFetch("search/movie", queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  const [maxTextLength, setMaxTextLength] = useState(150);

  const handleReadMore = () => {
    setMaxTextLength((prev) => (prev === 150 ? 10000 : 150));
  };

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
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Box
      sx={{
        paddingX: "6em",
        paddingY: "2em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            padding: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading
            ? "Loading..."
            : movies.length === 0
            ? `No results found for '${queryTerm}'`
            : `Search results for '${queryTerm}'`}
        </Typography>
        {loading ? (
          <Typography variant="h6">Loading...</Typography>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            sx={{ justifyContent: "center" }}
          >
            <Grid container spacing={3}>
              {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
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
                          height="400px"
                          width="100%"
                          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.original_title}
                        />
                        <CardContent
                          sx={{
                            padding: 2,
                            flex: 1,
                            backgroundColor: "rgb(12,20,255, 0.1)",
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

export default Search;
