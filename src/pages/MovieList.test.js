import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MovieList from "./MovieList";
import { useFetch } from "../hooks/useFetch";
import { BrowserRouter } from "react-router-dom";
// Mock the useFetch hook
jest.mock("../hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

describe("MovieList Component", () => {
  it("displays loading state initially", () => {
    useFetch.mockReturnValue({ data: [], loading: true });
    render(
      <BrowserRouter>
        <MovieList apiPath="some/api/path" />
      </BrowserRouter>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("displays movies once fetched", async () => {
    const mockMovies = [
      {
        id: 1,
        original_title: "Movie Title 1",
        poster_path: "path/to/poster1",
        overview: "Description 1",
      },
      {
        id: 2,
        original_title: "Movie Title 2",
        poster_path: "path/to/poster2",
        overview: "Description 2",
      },
    ];
    useFetch.mockReturnValue({ data: mockMovies, loading: false });

    render(
      <BrowserRouter>
        <MovieList apiPath="some/api/path" />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Movie Title 1")).toBeInTheDocument();
      expect(screen.getByText("Movie Title 2")).toBeInTheDocument();
      expect(screen.getByText("Description 1")).toBeInTheDocument();
      expect(screen.getByText("Description 2")).toBeInTheDocument();
    });
  });
});
