import "./App.css";
import Log from "./components/log/Log";
import Home from "./components/Home";
import { writeUserData, ReadData, singUp } from "./apifirebase";

function App() {
  //writeUserData("2", "Alex A", "fgsfsdgsdg@gmail.com", "");
  // ReadData(1);
  // singUp("fdfdfdf222222@gmail.com", "fdsfsd");

  return (
    <>
      {/* <Log /> */}
      <Home />
    </>
  );
}

export default App;
