import React, { useContext } from "react";
import "../../styles/compStyles/__chatField.sass";
import Cam from "../../styles/img/cam.png";
import Add from "../../styles/img/add.png";
import More from "../../styles/img/more.png";
import Messages from "./chatField/Messages";
import Input from "./chatField/Input";
import { ChatContext } from "../../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat-wrap">
      <div className="chat-info">
        <span className="chat-info-title">{data.user?.displayName}</span>
        <div className="chat-icons">
          <img src={Cam} alt="img" />
          <img src={Add} alt="img" />
          <img src={More} alt="img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
