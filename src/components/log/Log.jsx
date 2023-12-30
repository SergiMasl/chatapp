import { useState } from "react";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

function Log() {
  const [isSingIn, setIsSingIn] = useState("true");

  return (
    <div className="log-wrap">
      <div className="log-container">
        <h3 className="log-title">Chat Application</h3>
        {isSingIn ? <SingIn /> : <SingUp />}
        <div className="log-btm">
          <button
            className="chng-form-btm"
            onClick={(e) => setIsSingIn(!isSingIn)}
          >
            {isSingIn ? "Sing Up" : "Log In"}
          </button>
          {/* <button className="frg-ps">Forgot Passport?</button> */}
        </div>
      </div>
    </div>
  );
}

export default Log;
