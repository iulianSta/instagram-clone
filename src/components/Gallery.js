// Gallery function

const Gallery = ({ photos }) => {
  return (
    <div>
      <div>
        <span> POSTS </span>
        <span> REELS </span>
        <span> IGTV </span>
        <span> TAGGED </span>
      </div>
      <div>
        <div>{photos}</div>
        <div>{photos}</div>
      </div>
    </div>
  );
};

// Export Gallery
export default Gallery;
