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
  //check if the story is liked
  //if story is liked, then unlike it.
  //set isLiked to false/the opp of what it curr is
  //update status is firebase
  //if story is not liked, then set isLiked to true
  //udpate status in firebase

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <Link
            to={{
              pathname: "/all-author-stories",
              state: {
                userId: props.userId,
                author: props.author,
              },
            }}
          >
            {props.author}
          </Link>
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
                  summary: props.summary,
                  content: props.content,
                },
              }}
            >
              <button>Edit Story</button>
            </Link>
          ) : null}
          <Link
            to={{
              pathname: "/full-story",
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
            <button className="btn btn--alt" id="read-button">READ</button>
          </Link>
          {currentUser ? (
            <button
              className="btn btn--alt"
              onClick={toggleLikedStoryStatusHandler}
            >
              {storyIsLiked ? "Remove From Liked Stories" : "Like"}
            </button>
          ) : null}
        </div>
      </li>
    </Card>
  );
}

export default StoryItem;
