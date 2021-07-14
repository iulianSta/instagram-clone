// Import React from "react"
import React from "react";

// Import area
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

// Import Data
import Data from "./data.json";
// import Images from "./images.json";

// Import images
import avatar from "./img/i-love-img.jpg";
import Profile from "./img/jw-profile-img.jpg";
import ways from "./img/100ways.jpg";
import bullet from "./img/bullet-to-the-heart.jpg";
import dway from "./img/dway.jpg";
import fendiman from "./img/fendiman.jpg";
import oxygen from "./img/oxygen.jpg";
import papillon from "./img/papillon.jpg";

// App function
function App() {
  const post = Data.map((obj) => {
    const { id, owner, posts, followers, following, team, website, profile } =
      obj;

    return (
      <div className="post" key={id}>
        {/* <Nav Images={Images} /> */}
        <Nav avatar={avatar} />
        <Header
          owner={owner}
          posts={posts}
          followers={followers}
          following={following}
          team={team}
          website={website}
          Profile={Profile}
          // Images={Images}
        />
        <Gallery
          // Images={Images}
          ways={ways}
          bullet={bullet}
          dway={dway}
          fendiman={fendiman}
          oxygen={oxygen}
          papillon={papillon}
        />
      </div>
    );
  });
  return <div className="App">{post}</div>;
}

// Export App
export default App;
