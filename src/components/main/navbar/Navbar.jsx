import "../../../styles/compStyles/__navbar.sass";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar-wrap">
      <div className="user">
        <img src={currentUser.photoURL} alt="img" className="user-img" />
        <span className="user-name">{currentUser.displayName}</span>
      </div>
      <button className="user-out" onClick={() => signOut(auth)}>
        logout
      </button>
    </div>
  );
}

export default Navbar;
