import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./CreateNewStoryForm.module.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation, useHistory } from "react-router-dom";
import firebase from "firebase";

function EditStoryForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const summaryInputRef = useRef();
  const contentInputRef = useRef();
  const { currentUser } = useAuth();
  const location = useLocation();
  const { storyId } = location.state;
  const { image } = location.state;
  const { title } = location.state;
  const { summary } = location.state;
  const { content } = location.state;
  const history = useHistory();
  

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    const storyData = {
      title: enteredTitle,
      image: enteredImage,
      author: currentUser.email.substr(0, currentUser.email.indexOf("@")),
      summary: enteredSummary,
      content: enteredContent,
      userId: currentUser.uid,
    };
    updateStory(storyData);
    history.push("/my-stories");
  }


  function updateStory(storyData) {
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var update = {};
    update['/stories/' + storyId] = storyData;
    return firebase.database().ref().update(update);
  }

  return (
    <>
    <h1>Edit Story</h1>
      {currentUser ? (
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
          <div>
              <strong>Created By: </strong>{" "}
              {currentUser.email.substr(0, currentUser.email.indexOf("@"))}
            </div>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input type="text" required id="title" ref={titleInputRef} defaultValue={title}/>
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Story Image</label>
              <input type="url" required id="image" ref={imageInputRef} defaultValue={image}/>
            </div>
            <div className={classes.control}>
              <label htmlFor="summary">Summary</label>
              <textarea
                id="summary"
                required
                rows="3"
                ref={summaryInputRef}
                defaultValue={summary}
              ></textarea>
            </div>
            <div className={classes.control}>
              <label htmlFor="summary">Story</label>
              <textarea
                id="summary"
                required
                rows="10"
                ref={contentInputRef}
                defaultValue={content}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button>Update Story</button>
            </div>
          </form>
        </Card>
      ) : (
        <div className="w-100 text-center mt-2">
          You must <Link to="/authentication/login">log in</Link> to create a
          story.
        </div>
      )}
    </>
  );
}

export default EditStoryForm;
