import { useState } from "react";
import Img from "../../styles/img/addAvatar.png";

function SingUp() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="singIn-wrap">
      <form onSubmit={handleSubmit} className="log-form">
        <input
          className="log-input"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          className="log-input"
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />

        <input
          className="log-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input style={{ display: "none" }} tipe="file" id="file" />
        <label htmFor="file" className="log-ava-wrap">
          <img src={Img} alt="img" className="log-ava-img" />
          <span className="log-ava-text">Add an avatar</span>
        </label>

        <button type="submit" className="log-submit">
          Sing Up
        </button>
      </form>
    </div>
  );
}

export default SingUp;
