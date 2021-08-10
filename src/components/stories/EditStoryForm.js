import React from "react";
import { useRef, useEffect, useState } from "react";
import Card from "../ui/Card";
import classes from "./CreateNewStoryForm.module.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation, useHistory } from "react-router-dom";
import firebase from "firebase";
import ChapterEditItemList from "../chapters/ChapterEditItemList";

function EditStoryForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const summaryInputRef = useRef();
  //const contentInputRef = useRef();
  const { currentUser } = useAuth();
  const location = useLocation();
  const { storyId } = location.state;
  const { image } = location.state;
  const { title } = location.state;
  const { summary } = location.state;
  //const { content } = location.state;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedChapters, setLoadedChapters] = useState([]);

  var chapCount = 1;
  var chapters = [];
  var story = firebase.database().ref("/stories/" + storyId);

  useEffect(() => {
    setIsLoading(true);
    story.on("value", (snapshot) => {
      //console.log(snapshot.val());
      let snap = snapshot.val();
      for (const str in snap) {
        if (str.includes("chapter")) {
          const chapter = {
            storyId: storyId,
            chapterName: chapCount,
            chapterContent: snap[str],
          };
          chapters.push(chapter);
          chapCount++;
        }
      }
      setIsLoading(false);
      setLoadedChapters(chapters);
    });
  }, []);

  console.log(chapters);

  function updateStoryHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;
    //const enteredContent = contentInputRef.current.value;

    updateStory(enteredTitle, enteredImage, enteredSummary);
    history.push("/my-stories");
  }

  function updateStory(title, image, summary) {
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates["/stories/" + storyId + "/title/"] = title;
    updates["/stories/" + storyId + "/image/"] = image;
    updates["/stories/" + storyId + "/summary/"] = summary;
    return firebase
      .database()
      .ref()
      .update(updates);
  }

  return (
    <>
      <h1>Edit Story</h1>
      {currentUser ? (
        <Card>
          <form className={classes.form}>
            <div>
              <strong>Created By: </strong>{" "}
              {currentUser.email.substr(0, currentUser.email.indexOf("@"))}
            </div>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                id="title"
                ref={titleInputRef}
                defaultValue={title}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Story Image</label>
              <input
                type="url"
                required
                id="image"
                ref={imageInputRef}
                defaultValue={image}
              />
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
            {isLoading ? (
              <section>
                <p>Loading...</p>
              </section>
            ) : (
              <ChapterEditItemList chapters={loadedChapters} />
            )}
            <div className={classes.actions}>
              <button id="update-story-btn" onClick={updateStoryHandler}>
                Update Story
              </button>
            </div>
            <div className={classes.actions}>
              <Link
                to={{
                  pathname: "/new-chapter",
                  state: {
                    storyId: storyId,
                  },
                }}
              >
                <button id="new-chap-btn">Add New Chapter</button>
              </Link>
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
