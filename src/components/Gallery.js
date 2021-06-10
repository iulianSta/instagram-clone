// Gallery function

const Gallery = ({ photos, bts }) => {
  return (
    <div>
      <div>
        <span> POSTS </span>
        <span> REELS </span>
        <span> IGTV </span>
        <span> TAGGED </span>
      </div>
      <div>
        <div>
          <img src={bts} alt="Bts" />
        </div>
        <div>{photos}</div>
      </div>
    </div>
  );
};

// Export Gallery
export default Gallery;
