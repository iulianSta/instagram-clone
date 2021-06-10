// Nav function

const Nav = ({ Avatar }) => {
  return (
    <div className="menu">
      <nav>
        <div>Instagram</div>
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
          <li>
            <img src={Avatar} alt="i love heart" className="avatar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Export default Nav
export default Nav;
