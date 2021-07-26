import React from "react";
import { Link, Route } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
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
          <li>
            <Link to="/liked-stories">Liked Stories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
