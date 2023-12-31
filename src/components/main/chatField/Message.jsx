import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="img"
          className="message-user-img"
        />
        <span className="message-time">just now</span>
      </div>
      <div className="message-content">
        <p className="message-text"> {message.text}</p>
        {message.img && (
          <img src={message.img} alt="" className="message-img" />
        )}
      </div>
    </div>
  );
}

export default Message;
