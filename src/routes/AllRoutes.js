import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieDetail, PageNotFound, Search, MovieList } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList apiPath="now_playing" />} />
      <Route path="popular" element={<MovieList apiPath="top_rated" />} />
      <Route path="upcoming" element={<MovieList apiPath="upcoming" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
