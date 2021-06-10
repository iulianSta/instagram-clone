// Gallery function

const Gallery = ({ Ways, Bullet, Dway, Fendiman, Oxygen, Papillon }) => {
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
          <img src={Ways} alt="Bts" className="set-image" />
          <img src={Bullet} alt="Bts" className="set-image" />
          <img src={Dway} alt="Bts" className="set-image" />
        </div>
        <div>
          <img src={Fendiman} alt="Bts" className="set-image" />
          <img src={Oxygen} alt="Bts" className="set-image" />
          <img src={Papillon} alt="Bts" className="set-image" />
        </div>
      </div>
    </div>
  );
};

// Export Gallery
export default Gallery;
