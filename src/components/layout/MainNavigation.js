import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import classes from "./MainNavigation.module.css";


function MainNavigation() {
  const { currentUser } = useAuth();
  return (
    <header className={classes.header}>
      <a href="/" className={classes.logo}>Share Our Stories</a>
      <nav>
        <ul>
          <li>
            <Link to="/all-stories">All Stories</Link>
          </li>
          <li>
            <Link to="/create-story">Create Story</Link>
          </li>
          {currentUser ? <li>
            <Link to="/liked-stories">Liked Stories</Link>
          </li> : null}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
