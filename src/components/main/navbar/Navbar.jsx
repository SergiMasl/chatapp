import "../../../styles/compStyles/__navbar.sass";

function Navbar() {
  return (
    <div className="navbar-wrap">
      <div className="user">
        <img src="" alt="img" className="user-img" />
        <span className="user-name">John</span>
      </div>
      <button className="user-out">logout</button>
    </div>
  );
}

export default Navbar;
