import React, { useState } from "react";
import Img from "../../styles/img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { singUp } from "../../apifirebase";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

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
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      // const date = new Date().getTime();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }

    // singUp(email, password);
  };

  return (
    <div className="singIn-wrap">
      <form onSubmit={handleSubmit} className="log-form">
        <input required className="log-input" type="text" placeholder="Name" />
        <input className="log-input" type="email" placeholder="email" />
        <input className="log-input" type="password" placeholder="Password" />

        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file" className="log-ava-wrap">
          <img src={Img} alt="img" className="log-ava-img" />
          <span className="log-ava-text">Add an avatar</span>
        </label>

        <button type="submit" className="log-submit">
          Sing Up
        </button>
        {err && <span>Something went wrong</span>}
      </form>
    </div>
  );
}

export default SingUp;
