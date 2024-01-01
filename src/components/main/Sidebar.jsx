import React from "react";
import Navbar from "./navbar/Navbar";
import Search from "../chats/Search";
import Chats from "./navbar/Chats";

function Sidebar() {
  return (
    <div className="sidebar-wrap">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
