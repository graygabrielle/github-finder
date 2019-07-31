import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import Users from "./Users";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const { clearUsers, users, searchUsers, setAlert, alert } = githubContext;
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      if (alert !== null) {
        setText("");
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users />
    </div>
  );
};

export default Search;
