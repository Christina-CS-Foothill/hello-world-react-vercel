import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./CreateNewStoryForm.module.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

function CreateNewStoryForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const authorInputRef = useRef();
  const summaryInputRef = useRef();
  const contentInputRef = useRef();
  const { currentUser } = useAuth();
  const location = useLocation();
  const { fromDemo } = location.state || false;

  if (fromDemo) {
    console.log("Story will submit itself in 5 seconds");
    setTimeout(() => {
      console.log("Story sumbitted.");
    }, 5000);
    //must submit here
    //document.getElementById("submit-button").click();
  }

  //demo story values
  const demoTitle = "The Stellar One";
  const demoImage =
    "https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1419316919757-CIM2P3OPPFQVAVNP7YX5/image-asset.png?format=750w";
  const demoAuthor = "Daniel Errico";
  const demoSummary =
    "Long ago, there was a rock floating through space, searching for where she belonged. She would visit many planets and travel to the farthest reaches of the universe, but would she find what she was looking for? The Stellar One is a tale of self-esteem and self-discovery.";
  const demoContent =
    "When the universe was young the sky was filled with planets, and stars, and stardust, and many many rocks. One of these rocks was a bit more special than the rest.  She was unlike any that came before her. She was a kind and happy rock, who always floated near a big blue planet.Sometimes when the light hit her surface, she would glow a brilliant green.  At times like those, she almost didn't look like a rock at all. As the sky moved from day to day, and week to week, the rock would see planets far off in the distance.";

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    const storyData = {
      title: enteredTitle,
      image: enteredImage,
      author: enteredAuthor,
      summary: enteredSummary,
      content: enteredContent,
      userId: currentUser.uid,
    };

    //console.log(currentUser.uid);
    props.onCreateNewStory(storyData);
  }

  return (
    <>
      {currentUser || fromDemo ? (
        <Card>
          <form
            className={classes.form}
            onSubmit={!fromDemo ? submitHandler : null}
          >
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                id="title"
                ref={titleInputRef}
                defaultValue={fromDemo ? demoTitle : null}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Story Image</label>
              <input
                type="url"
                required
                id="image"
                ref={imageInputRef}
                defaultValue={fromDemo ? demoImage : null}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                required
                id="author"
                ref={authorInputRef}
                defaultValue={fromDemo ? demoAuthor : null}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="summary">Summary</label>
              <textarea
                id="summary"
                required
                rows="3"
                ref={summaryInputRef}
                defaultValue={fromDemo ? demoSummary : null}
              ></textarea>
            </div>
            <div className={classes.control}>
              <label htmlFor="story">Story</label>
              <textarea
                id="story"
                required
                rows="10"
                ref={contentInputRef}
                defaultValue={fromDemo ? demoContent : null}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button id="submit-button">Create Story</button>
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
