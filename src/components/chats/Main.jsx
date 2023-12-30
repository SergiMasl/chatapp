import messages from "../../temp/messages.json";

function Main({ currentUserReading }) {
  const currentUser = "user1";
  let currentMessages;

  if (currentUserReading) {
    findArrayElementByUserTo();
  }

  function findArrayElementByUserTo() {
    currentMessages = messages;
    return currentMessages.find((element) => {
      return element.userNameTo == "user1";
    });
  }
  console.log(currentMessages);
  return <div className="main-wrap"></div>;
}

export default Main;
