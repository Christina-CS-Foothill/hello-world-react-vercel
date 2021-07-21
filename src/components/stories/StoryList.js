import React from "react";
import classes from "./StoryList.module.css";
import StoryItem from "./StoryItem";

function StoryList(props) {
  return (
    <ul className={classes.list}>
      {props.stories.map((story) => (
        <StoryItem
          key={story.id}
          id={story.id}
          image={story.image}
          title={story.title}
          author={story.author}
          summary={story.summary}
          chapterOneTitle={story.chapterOneTitle}
          chapterOneBody={story.chapterOneBody}
        />
      ))}
    </ul>
  );
}

export default StoryList;
