import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Share Our Stories</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Stories</Link>
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
