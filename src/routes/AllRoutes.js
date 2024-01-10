import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieDetail, PageNotFound, Search, MovieList } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<MovieList apiPath="movie/now_playing" />} />
      <Route path="popular" element={<MovieList apiPath="movie/top_rated" />} />
      <Route path="upcoming" element={<MovieList apiPath="movie/upcoming" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default AllRoutes;
