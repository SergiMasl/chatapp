import userFriends from "../../temp/userFriends.json";

function Users({ setCurrentUserReading, setCurrentUser }) {
  // const userMassageImail = [
  //   { massageId: "1", fromUser: "user2", toUser: "user1", text: "hello" },
  // ];

  const setCurrentReadingUser = (user) => {
    setCurrentUserReading(user.userName);
    setCurrentUser(user.name);
  };

  return (
    <div className="users-wrap">
      <div className="users-btm-container"></div>
      <h3 className="users-title">My friends</h3>
      {userFriends.map((user) => (
        <div
          className={`user-container ${user.newMessage && "user-newmessage"}`}
          onClick={() => setCurrentReadingUser(user)}
          key={user.userId}
        >
          <img src={user.avatar} alt="img" className="user-img"></img>
          <p className="user-name">{user.name}</p>
          {user.isOnline && <span className="user-status"></span>}
        </div>
      ))}
    </div>
  );
}

export default Users;
