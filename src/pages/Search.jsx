import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import Backup from "../assets/images/backup.png";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading } = useFetch("search/movie", queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  const [readMore, setReadMore] = useState({});

  const handleReadMore = (id) => {
    setReadMore((prevReadMore) => ({
      ...prevReadMore,
      [id]: !prevReadMore[id],
    }));
  };

  return (
    <main>
      <section
        className="py-7"
        sx={{ textAlign: "center", color: "rgb(55, 65, 81)", padding: "16px" }}
      >
        <Typography variant="h3">
          {loading
            ? "Loading..."
            : movies.length === 0
            ? `No results found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </Typography>
      </section>
      <section className="max-w-7xl mx-auto py-7">
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
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: "white",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    margin: "16px",
                    height: "100%",
                    borderRadius: "0", // Square corners
                  }}
                >
                  <Link to={`/movie/${movie.id}`}>
                    <CardMedia
                      component="img"
                      height="auto"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : Backup
                      }
                      alt=""
                      sx={{
                        borderTopLeftRadius: "0", // Square corners
                        borderTopRightRadius: "0", // Square corners
                      }}
                    />
                  </Link>
                  <CardContent>
                    <Link to={`/movie/${movie.id}`}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          color: "rgb(55, 65, 81)",
                          textDecoration: "none",
                        }}
                      >
                        {movie.original_title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "rgb(107, 114, 128)" }}
                    >
                      {readMore[movie.id]
                        ? movie.overview
                        : `${movie.overview.slice(0, 150)}...`}
                      <Typography
                        component="span"
                        sx={{ color: "rgb(30, 58, 138)", cursor: "pointer" }}
                        onClick={() => handleReadMore(movie.id)}
                      >
                        {readMore[movie.id] ? " Read less" : " Read more"}
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
    </main>
  );
};

export default Search;
