import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function SingIn() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="singIn-wrap">
      <form onSubmit={handleSubmit} className="log-form">
        <input className="log-input" type="text" placeholder="Username" />
        <input className="log-input" type="password" placeholder="Password" />

        <button type="submit" className="log-submit">
          Start Chatting
        </button>
        {err && <span>Something went wrong</span>}
      </form>
    </div>
  );
}

export default SingIn;
