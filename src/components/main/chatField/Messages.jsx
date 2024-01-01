import React from "react";
import "../../../styles/compStyles/__message.sass";
import Message from "./Message";

function Messages() {
  return (
    <div className="messages-wrap">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
