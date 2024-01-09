// AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieDetail, PageNotFound, Search, MovieList } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList api="movie/now_playing" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route
        path="movies/popular"
        element={<MovieList api="movie/popular" />}
      />
      <Route path="movies/top" element={<MovieList api="movie/top_rated" />} />
      <Route
        path="/movies/upcoming/"
        element={<MovieList api="movie/popular" />}
      />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
