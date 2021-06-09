// Header function

const Header = ({
  owner,
  profileImg,
  subscribers,
  posts,
  followers,
  following,
  team,
  website,
}) => {
  return (
    <div>
      <div>
        <div className="user">{profileImg}</div>
        <div>
          <h3>
            {owner} <span>&#9745;</span>
          </h3>
          <button type="button"> Follow </button>
          <button type="select"> v </button>
          <span> ... </span>
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
