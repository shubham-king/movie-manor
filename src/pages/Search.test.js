import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";

// Mock useFetch custom hook
jest.mock("../hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

// Mock useSearchParams from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Use actual for all parts except useSearchParams
  useSearchParams: () => [
    new URLSearchParams({ q: "test" }), // Simulate search params
  ],
}));

// Import the mocked useFetch after jest.mock
import { useFetch } from "../hooks/useFetch";

describe("Search Component", () => {
  it("displays loading initially", () => {
    useFetch.mockImplementation(() => ({
      data: [],
      loading: true,
    }));

    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays search results after loading", async () => {
    useFetch.mockImplementation(() => ({
      data: [
        {
          id: 1,
          original_title: "Test Movie",
          overview: "This is a test movie.",
          poster_path: "/testpath.jpg",
        },
      ],
      loading: false,
    }));

    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Search results for 'test'")).toBeInTheDocument();
      expect(screen.getByText("Test Movie")).toBeInTheDocument();
    });
  });

  it("displays no results message when there are no movies", async () => {
    useFetch.mockImplementation(() => ({
      data: [],
      loading: false,
    }));

    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("No results found for 'test'")
      ).toBeInTheDocument();
    });
  });
});
