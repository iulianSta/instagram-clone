// Gallery function

const Gallery = ({ photos }) => {
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
        <div>
          <img src={photos} alt="Bts" />
        </div>
        <div>{photos}</div>
      </div>
    </div>
  );
};

// Export Gallery
export default Gallery;
