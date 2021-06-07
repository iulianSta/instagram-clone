// Header function

const Header = ({
  owner,
  profileImg,
  subscribers,
  posts,
  followers,
  following,
}) => {
  return (
    <div>
      <div>
        <div className="user">{profileImg}</div>
        <div>
          <h3>
            {owner} <span>&#9745;</span>
          </h3>
          <button type="button">Follow</button>
          <button type="select">v</button>
          <span>...</span>
          <div>
            <span>{posts} posts</span>
            <br />
            <span>{followers} followers</span>
            <br />
            <span>{following} following</span>
            <br />
          </div>
          <div></div>
        </div>
      </div>
      <div>{subscribers}</div>
    </div>
  );
};

// Export Header
export default Header;
