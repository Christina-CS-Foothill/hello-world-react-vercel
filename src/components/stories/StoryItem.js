import React from "react";
import classes from "./StoryItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import LikedStoriesContext from "../../context/liked-stories-context";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function StoryItem(props) {
  const likedStoriesCtx = useContext(LikedStoriesContext);
  const storyIsLiked = likedStoriesCtx.storyIsLiked(props.storyId);
  //console.log(storyIsLiked);
  const { currentUser } = useAuth();

  function toggleLikedStoryStatusHandler() {
    if (storyIsLiked) {
      likedStoriesCtx.removeLikedStory(props.storyId);
    } else {
      likedStoriesCtx.addLikedStory({
        storyId: props.storyId,
        userId: props.userId,
        title: props.title,
        summary: props.summary,
        content: props.content,
        image: props.image,
        author: props.author,
      });
    }
  }

  return (
    <Card>
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
          {currentUser && props.userId === currentUser.uid ? (
            <Link
              to={{
                pathname: "/edit-story",
                state: {
                  storyId: props.storyId,
                  image: props.image,
                  title: props.title,
                  author: props.author,
                  summary: props.summary,
                  content: props.content,
                },
              }}
            >
              <button>Edit Story</button>
            </Link>
          ) : null}
          <Link to={{
                pathname: "/full-story",
                state: {
                  storyId: props.storyId,
                  image: props.image,
                  title: props.title,
                  author: props.author,
                  summary: props.summary,
                  content: props.content,
                },
              }}>
            <button className="btn btn--alt">READ</button>
          </Link>
          <button
            className="btn btn--alt"
            onClick={toggleLikedStoryStatusHandler}
          >
            {storyIsLiked ? "Remove From Liked Stories" : "Like"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default StoryItem;
