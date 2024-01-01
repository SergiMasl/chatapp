import React from "react";
import "../../../styles/compStyles/__inputChat.sass";
import Img from "../../../styles/img/img.png";
import Attach from "../../../styles/img/attach.png";

function Input() {
  return (
    <div className="input-wrap">
      <input
        type="text"
        placeholder="Type something..."
        // onChange={(e) => setText(e.target.value)}
        // value={text}
      />
      <div className="send">
        <img src={Attach} alt="img" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          //   onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="img" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
