// Header function

const Header = ({ owner, profileImg, subscribers }) => {
  return (
    <div>
      <div>
        <div className="user">{profileImg}</div>
        <div>
          <h3>{owner}</h3>
        </div>
      </div>
      <div>{subscribers}</div>
    </div>
  );
};

// Export Header
export default Header;
