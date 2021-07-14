// Import React from "react"
import React from "react";

// Import Nav
import Nav from "./components/Nav";

// Import Header
import Header from "./components/Header";

// Import Gallery
import Gallery from "./components/Gallery";

// Import Data
import Data from "./data.json";

// Import images
import Avatar from "./img/i-love-img.jpg";
import Profile from "./img/jw-profile-img.jpg";
import Ways from "./img/100ways.jpg";
import Bullet from "./img/bullet-to-the-heart.jpg";
import Dway from "./img/dway.jpg";
import Fendiman from "./img/fendiman.jpg";
import Oxygen from "./img/oxygen.jpg";
import Papillon from "./img/papillon.jpg";

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
    } = obj;

    return (
      <div className="post" key={id}>
        <Nav Avatar={Avatar} />
        <Header
          owner={owner}
          profileImg={profileImg}
          posts={posts}
          followers={followers}
          following={following}
          team={team}
          website={website}
          Profile={Profile}
        />
        <Gallery
          Ways={Ways}
          Bullet={Bullet}
          Dway={Dway}
          Fendiman={Fendiman}
          Oxygen={Oxygen}
          Papillon={Papillon}
        />
      </div>
    );
  });
  return <div className="App">{post}</div>;
}

// Export App
export default App;
