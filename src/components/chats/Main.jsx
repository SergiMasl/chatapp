import messages from "../../temp/messages.json";

function Main({ currentUserReading, currentUser }) {
  return (
    <div className="main-wrap">
      <h3 className="main-title">{currentUser}</h3>
      <div className="main-container">
        {messages.map((e) => (
          <div className="message-wrap" key={e.messageId}>
            <img className="message-img" alt="img" src="" />
            <div className="message-wrap-text">
              <h4 className="message-user">{e.userNameFrom}</h4>
              <p className="message-text">{e.text}</p>
              <span className="message-time">{e.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
