import "../../../styles/compStyles/__navbar.sass";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

function Navbar() {
  return (
    <div className="navbar-wrap">
      <div className="user">
        <img src="" alt="img" className="user-img" />
        <span className="user-name">John</span>
      </div>
      <button className="user-out" onClick={() => signOut(auth)}>
        logout
      </button>
    </div>
  );
}

export default Navbar;
