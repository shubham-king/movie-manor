import "./App.css";
import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import { AllRoutes } from "./routes/AllRoutes";

const linksArray = ["Home", "Popular", "Top Rated", "Upcoming"];

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Header links={linksArray} />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
