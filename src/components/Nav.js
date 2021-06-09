// Nav function

const Nav = ({ avatar }) => {
  return (
    <div>
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
          <li>home</li>
          <li>message</li>
          <li>location</li>
          <li>heart</li>
          <li>{avatar}</li>
        </ul>
      </nav>
    </div>
  );
};

// Export default Nav
export default Nav;
