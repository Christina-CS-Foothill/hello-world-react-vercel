import React from "react";
import classes from "./StoryList.module.css";
import StoryItem from "./StoryItem";

function StoryList(props) {
  return (
    <ul className={classes.list}>
      {props.stories.map((story) => (
        //console.log(story.id),
        <StoryItem
          key={story.id}
          storyId={story.id}
          userId={story.userId}
          image={story.image}
          title={story.title}
          author={story.author}
          summary={story.summary}
          content={story.content}
        />
      ))}
    </ul>
  );
}

export default StoryList;
