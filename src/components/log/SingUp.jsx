import React, { useState } from "react";
import Img from "../../styles/img/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function SingUp() {
  const [err, setErr] = useState(false);
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   password: "",
  //   name: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="singIn-wrap">
      <form onSubmit={handleSubmit} className="log-form">
        <input required className="log-input" type="text" placeholder="Name" />
        <input className="log-input" type="text" placeholder="Username" />
        <input
          className="log-input"
          required
          type="email"
          placeholder="email"
        />
        <input className="log-input" type="password" placeholder="Password" />

        {/* <input style={{ display: "none" }} tipe="file" id="file" /> */}
        {/* <label htmFor="file" className="log-ava-wrap">
          <img src={Img} alt="img" className="log-ava-img" />
          <span className="log-ava-text">Add an avatar</span>
        </label> */}

        <button type="submit" className="log-submit">
          Sing Up
        </button>
        {err && <span>Something went wrong</span>}
      </form>
    </div>
  );
}

export default SingUp;
