import React from "react";
import classes from "./StoryList.module.css";
import StoryItem from "./StoryItem";

function StoryList(props) {
  return (
    <ul className={classes.list}>
      {props.stories.map((story) => (
        <StoryItem
          key={story.id}
          userId={story.userId}
          image={story.image}
          title={story.title}
          author={story.author}
          summary={story.summary}
        />
      ))}
    </ul>
  );
}

export default StoryList;
