// import Teams from "./chats/Teams";
// import Users from "./chats/Users";
// import Main from "./chats/Main";
// import { useState } from "react";
import Chat from "./main/Chat";
import Sidebar from "./main/Sidebar";
import "../styles/compStyles/_home.sass";

function Home() {
  // const [currentUserReading, setCurrentUserReading] = useState("");
  // const [currentUser, setCurrentUser] = useState("");

  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
