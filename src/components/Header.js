// Header function

const Header = ({
  owner,
  Profile,
  subscribers,
  posts,
  followers,
  following,
  team,
  website,
}) => {
  return (
    <div className="header">
      <div>
        <div className="user">
          <img src={Profile} alt="Jackson Wang" className="profile" />
        </div>
        <div>
          <div className="user-area">
            <h3>
              {owner}{" "}
              <span>
                {" "}
                <i className="check"></i>{" "}
              </span>
            </h3>
            <button type="button"> Follow </button>
            <button type="select"> v </button>
            <span className="more"> ... </span>
          </div>
          <div>
            <span> {posts} posts </span>
            <span> {followers} followers </span>
            <span> {following} following </span>
            <p>
              <span>{team}</span>
              <br />
              <span>
                Visit our YouTube channel @teamWang to watch our latest videos
              </span>
              <br />
              <span>{website}</span>
            </p>
          </div>
        </div>
      </div>
      <div>{subscribers}</div>
    </div>
  );
};

// Export Header
export default Header;
