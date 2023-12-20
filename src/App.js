import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {
  originals,
  actions,
  comedy,
  horror,
  romance,
  trending,
} from "./urls.js";

const url = [
  { urls: actions, title: "Action" },
  { urls: trending, title: "Trending" },
  { urls: originals, title: "Netflix Originals" },
  { urls: romance, title: "Romance" },
  { urls: comedy, title: "Comedy" },
  { urls: horror, title: "Horror" },
];

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      {url.map((row) => (
        <RowPost urls={row.urls} title={row.title} />
      ))}
      {}
    </div>
  );
}

export default App;
