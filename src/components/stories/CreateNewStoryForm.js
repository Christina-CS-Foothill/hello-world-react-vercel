import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./CreateNewStoryForm.module.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function CreateNewStoryForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const authorInputRef = useRef();
  const summaryInputRef = useRef();
  const { currentUser } = useAuth();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;

    const storyData = {
      title: enteredTitle,
      image: enteredImage,
      author: enteredAuthor,
      summary: enteredSummary,
      userId: currentUser.uid,
    };

    console.log(currentUser.uid);
    props.onCreateNewStory(storyData);
  }
  return (
    <>
      {currentUser ? (
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Story Image</label>
              <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="author">Author</label>
              <input type="text" required id="author" ref={authorInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="summary">Summary</label>
              <textarea
                id="summary"
                required
                rows="5"
                ref={summaryInputRef}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button>Create Story</button>
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

export default CreateNewStoryForm;
