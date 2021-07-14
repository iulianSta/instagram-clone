// Import React from "react"
import React from "react";

// Import area
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

// Import Data
import Data from "./data.json";
import Images from "./images.json";

// Import images
// import Avatar from "./img/i-love-img.jpg";
// import Profile from "./img/jw-profile-img.jpg";
// import Ways from "./img/100ways.jpg";
// import Bullet from "./img/bullet-to-the-heart.jpg";
// import Dway from "./img/dway.jpg";
// import Fendiman from "./img/fendiman.jpg";
// import Oxygen from "./img/oxygen.jpg";
// import Papillon from "./img/papillon.jpg";

// App function
function App() {
  const post = Data.map((obj) => {
    const { id, owner, posts, followers, following, team, website } = obj;

    return (
      <div className="post" key={id}>
        <Nav Images={Images} />
        {/* <Nav avatar={avatar} /> */}
        <Header
          owner={owner}
          posts={posts}
          followers={followers}
          following={following}
          team={team}
          website={website}
          profile={profile}
        />
        <Gallery
          Images={Images}
          // ways={ways}
          // bullet={bullet}
          // dway={dway}
          // fendiman={fendiman}
          // oxygen={oxygen}
          // papillon={papillon}
        />
      </div>
    );
  });
  return <div className="App">{post}</div>;
}

// Export App
export default App;
