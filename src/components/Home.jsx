import Teams from "./chats/Teams";
import Users from "./chats/Users";
import Main from "./chats/Main";

function Home() {
  return (
    <div className="home">
      <Teams />
      <Main />
      <Users />
    </div>
  );
}

export default Home;
