import React, { useRef } from "react";
import classes from "../stories/CreateNewStoryForm.module.css";
import Card from "../ui/Card";
import { useLocation, useHistory } from "react-router-dom";
import firebase from "firebase";

function CreateNewChapterForm() {
  const chapterContentInputRef = useRef();
  const location = useLocation();
  const { storyId } = location.state;
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();

    const enteredChapterContent = chapterContentInputRef.current.value;

    createChapter(enteredChapterContent);
    history.push("/my-stories");
  }

  function createChapter(chapterData) {

    let chapCount = 1;
    const chapters = [];
    var chapterName = "";
    //wanna check if I can just pull the whole object
    var story = firebase.database().ref("/stories/" + storyId);

    story.on("value", (snapshot) => {
      //console.log(snapshot.val());
      let snap = snapshot.val();
      for (const str in snap) {
        if (str.includes("chapter")) {
          chapters.push();
          chapCount++;
          console.log(chapCount);
        }
      }
    });

    setTimeout(function() {
      chapterName = "/chapter_" + chapCount + "/";
      console.log(chapterName);
    }, 3000);

    var update = {};
    setTimeout(function() {
      console.log(chapterName);
      update["/stories/" + storyId + chapterName] = chapterData;
      return firebase
        .database()
        .ref()
        .update(update);
    }, 5000);
  }

  /*function createChapterTitle() {
    let chapCount = 1;
    const chapters = [];

    //wanna check if I can just pull the whole object
    var story = firebase.database().ref("/stories/" + storyId);

    story.on("value", (snapshot) => {
      //console.log(snapshot.val());
      let snap = snapshot.val();
      for (const str in snap) {
        if (str.includes("chapter")) {
          chapters.push();
          chapCount++;
          console.log(chapCount);
        }
      }
    });

    setTimeout(function() {
      var chapterName = "/chapter_" + chapCount + "/";
      console.log(chapterName);
      return chapterName;
    }, 3000);
  }*/

  return (
    <>
      <h1>New Chapter</h1>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <textarea
              type="text"
              rows="15"
              required
              id="content"
              ref={chapterContentInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Create New Chapter</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default CreateNewChapterForm;
