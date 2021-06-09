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

// App function
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
    return (
      <div className="post" key={id}>
        <Nav avatar={avatar} />
        <Header
          owner={owner}
          profileImg={profileImg}
          subscribers={subscribers}
          posts={posts}
          followers={followers}
          following={following}
          team={team}
          website={website}
        />
        <Gallery photos={photos} />
      </div>
    );
  });
  return <div className="App">{post}</div>;
}

// Export App
export default App;
