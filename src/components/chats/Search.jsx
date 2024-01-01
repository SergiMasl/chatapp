import React from "react";
import "../../styles/compStyles/__search.sass";

function Search() {
  return (
    <div className="search-wrap">
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Find a user"
          //   onKeyDown={handleKey}
          //   onChange={(e) => setUsername(e.target.value)}
          //   value={username}
        />
      </div>
      {/* {err && <span>User not found!</span>}
      {user && ( */}
      {/* <div className="user-chat">
        <img src="" alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div> */}
    </div>
  );
}

export default Search;
