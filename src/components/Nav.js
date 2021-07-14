// Nav function

const Nav = ({ avatar }) => {
  // const imgAvatar = Images.map((obj) => {
  //   const { avatar } = obj;
  //   return <img src={avatar} alt="i love heart" className="avatar" />;
  // });
  return (
    <div className="menu">
      <nav>
        <div className="logo">Instagram</div>
        <div>
          <input
            type="searchbox"
            className="search"
            placeholder="&#128269; Search"
          />
        </div>
        <ul>
          <li>
            <i className="home"></i>
          </li>
          <li>
            <i className="message"></i>
          </li>
          <li>
            <i className="compass"></i>
          </li>
          <li>
            <i className="heart"></i>
          </li>
          {/* <li>{imgAvatar}</li> */}
          <li>
            <img src={avatar} alt="i love heart" className="avatar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Export default Nav
export default Nav;
