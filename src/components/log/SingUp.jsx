import { useState } from "react";

function SingUp() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fName: "",
    lName: "",
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
          name="fName"
          placeholder="First Name"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          className="log-input"
          type="text"
          name="lName"
          placeholder="Last Name"
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

        <button type="submit" className="log-submit">
          Sing Up
        </button>
      </form>
    </div>
  );
}

export default SingUp;
