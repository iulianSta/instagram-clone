// Gallery function

const Gallery = ({ ways, bullet, dway, fendiman, oxygen, papillon }) => {
  return (
    <div className="gallery">
      <div className="top">
        <span>
          <i className="th"></i> POSTS
        </span>
        <span>
          <i className="calendar"></i>
          <i className="caret"></i>
          REELS
        </span>
        <span>
          <i className="tv"></i> IGTV
        </span>
        <span>
          <i className="idbadge"></i> TAGGED
        </span>
      </div>
      <div>
        <div className="gallery-area">
          <img src={ways} alt="Bts" className="set-image" />
          <img src={bullet} alt="Bts" className="set-image" />
          <img src={dway} alt="Bts" className="set-image" />
        </div>
        <div>
          <img src={fendiman} alt="Bts" className="set-image" />
          <img src={oxygen} alt="Bts" className="set-image" />
          <img src={papillon} alt="Bts" className="set-image" />
        </div>
      </div>
    </div>
  );
};

// Export Gallery
export default Gallery;
