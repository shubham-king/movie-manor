import React from "react";
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

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section
        className="py-7"
        sx={{ textAlign: "center", color: "#374151", padding: "16px" }}
      >
        <Typography variant="h4">
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
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    margin: "16px",
                    height: "100%",
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
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />
                  </Link>
                  <CardContent>
                    <Link to={`/movie/${movie.id}`}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          color: "#374151",
                          textDecoration: "none",
                        }}
                      >
                        {movie.original_title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#6B7280" }}
                    >
                      {movie.overview}
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
