import React, { useRef } from "react";
import classes from "../stories/CreateNewStoryForm.module.css";
import Card from "../ui/Card";
import { useLocation, useHistory } from "react-router-dom";
import firebase from "firebase";

function EditChapterForm() {
  const chapterContentInputRef = useRef();
  const location = useLocation();
  const { storyId } = location.state;
  const { chapterName } = location.state;
  const { chapterContent } = location.state;
  const history = useHistory();


  function submitHandler(event) {
    event.preventDefault();

    const enteredChapterContent = chapterContentInputRef.current.value;
    console.log(enteredChapterContent);
    //update firebase
    var update = {};
    update["/stories/" + storyId + "/chapter_" + chapterName + "/"] = enteredChapterContent;
    firebase.database().ref().update(update);
    history.push("/my-stories");
  }

  return (
    <>
      <strong>Chapter:</strong> {chapterName}
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <textarea
              type="text"
              rows="15"
              required
              id="content"
              ref={chapterContentInputRef}
              defaultValue={chapterContent}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Update Chapter</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default EditChapterForm;
