// Import React from "react"
import React from "react";
// Import {useState} from "react";
import { useState } from "react";
// Import Nav
import Nav from "./components/Nav";
// Import Header
import Header from "./components/Header";
// Import Gallery
import Gallery from "./components/Gallery";
// Import Data
import Data from "./data.json";
console.log(Data);

function App() {
  const post = Data.map((obj) => {
    const {
      id,
      owner,
      avatar,
      profileImg,
      posts,
      followers,
      following,
      team,
      website,
      subscribers,
      photos,
    } = obj;
  });
  return (
    <div className="App">
      <Nav />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
