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
              {team}{" "}
              <span>
                {" "}
                <i className="check"></i>{" "}
              </span>
            </h3>
            <button type="button"> Follow </button>
            <button type="select"> v </button>
            <span className="more"> ... </span>
          </div>
          <div className="content">
            <div>
              <span>
                <strong>{posts}</strong> posts
              </span>
              <span>
                <strong>{followers}</strong> followers
              </span>
              <span>
                <strong>{following}</strong> following
              </span>
            </div>
            <p>
              <span className="owner"> {owner} </span>
              <br />
              <span>
                Visit our YouTube channel{" "}
                <strong className="infos">@teamWang</strong> to watch our latest
                videos
              </span>
              <br />
              <span>
                <strong className="infos">{website}</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="followers">{subscribers}</div>
    </div>
  );
};

// Export Header
export default Header;
