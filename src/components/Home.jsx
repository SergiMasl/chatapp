import Teams from "./chats/Teams";
import Users from "./chats/Users";
import Main from "./chats/Main";
import { useState } from "react";

function Home() {
  const [currentUserReading, setCurrentUserReading] = useState("");

  return (
    <div className="home">
      <Teams />
      <Main currentUserReading={currentUserReading} />
      <Users setCurrentUserReading={setCurrentUserReading} />
    </div>
  );
}

export default Home;
