import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail, PageNotFound, Search, MovieList } from "../pages";

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="/movies/upcoming/" element={<MovieList />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
