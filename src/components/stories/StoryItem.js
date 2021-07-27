import React from "react";
import classes from "./StoryItem.module.css";
import Backdrop from "../Backdrop";
import Modal from "../Modal";
import Card from "../ui/Card";
import { useState, useContext } from "react";
import LikedStoriesContext from "../../context/liked-stories-context";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function StoryItem(props) {
  const likedStoriesCtx = useContext(LikedStoriesContext);
  const storyIsLiked = likedStoriesCtx.storyIsLiked(props.storyId);
  console.log(storyIsLiked);
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
        image: props.image,
        author: props.author,
      });
    }
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function readHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
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
            <Link to={{
              pathname: "/edit-story",
              state: {
                storyId: props.storyId,
                image: props.image,
                title: props.title,
                author: props.author,
                summary: props.summary
              }}}>
              <button>Edit Story</button>
            </Link>
          ) : null}
          <button className="btn btn--alt" onClick={readHandler}>
            READ
          </button>
          <button
            className="btn btn--alt"
            onClick={toggleLikedStoryStatusHandler}
          >
            {storyIsLiked ? "Remove From Liked Stories" : "Like"}
          </button>
        </div>
        {modalIsOpen ? (
          <Modal
            text={props.summary}
            onCancel={closeModalHandler}
            onViewFullStory={closeModalHandler}
          />
        ) : null}
        {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
      </li>
    </Card>
  );
}

export default StoryItem;
