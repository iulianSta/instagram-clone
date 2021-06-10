// Import React from "react"
import React from "react";
// Import {useState} from "react";
//import { useState } from "react";
// Import Nav
import Nav from "./components/Nav";
// Import Header
import Header from "./components/Header";
// Import Gallery
import Gallery from "./components/Gallery";
// Import Data
import Data from "./data.json";
import bts from "./img/bts.png";
import Avatar from "./img/i-love-img.jpg";
import Profile from "./img/jw-profile-img.jpg";

// App function
function App() {
  const post = Data.map((obj) => {
    const {
      id,
      owner,
      profileImg,
      posts,
      followers,
      following,
      team,
      website,
      subscribers,
      photos,
    } = obj;
    return (
      <div className="post" key={id}>
        <Nav Avatar={Avatar} />
        <Header
          owner={owner}
          profileImg={profileImg}
          subscribers={subscribers}
          posts={posts}
          followers={followers}
          following={following}
          team={team}
          website={website}
          Profile={Profile}
        />
        <Gallery photos={photos} bts={bts} />
      </div>
    );
  });
  return <div className="App">{post}</div>;
}

// Export App
export default App;
