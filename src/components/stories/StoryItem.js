import React from "react";
import classes from "./StoryItem.module.css";

function StoryItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.summary}</p>
      </div>
      <div className={classes.actions}>
        <button>READ</button>
      </div>
    </li>
  );
}

export default StoryItem;
