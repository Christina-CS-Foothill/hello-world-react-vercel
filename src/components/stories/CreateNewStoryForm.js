import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./CreateNewStoryForm.module.css";

function CreateNewStoryForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const authorInputRef = useRef();
  const summaryInputRef = useRef();
  const chapterTitleInputRef = useRef();
  const chapterInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;
    const enteredChapterTitle = chapterTitleInputRef.current.value;
    const enteredChapter = chapterInputRef.current.value;

    const storyData = {
        title: enteredTitle,
        image: enteredImage,
        author: enteredAuthor,
        summary: enteredSummary,
        //chapterOneTitle: enteredChapterTitle,
        //chapterOneBody: enteredChapter
    }

    props.onCreateNewStory(storyData,enteredChapterTitle,enteredChapter);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Story Title</label>
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
        <div className={classes.control}>
          <label htmlFor="title">Chapter Title</label>
          <input type="text" required id="title" ref={chapterTitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="summary">Body</label>
          <textarea
            id="chapter"
            required
            rows="15"
            ref={chapterInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Create Story</button>
        </div>
      </form>
    </Card>
  );
}

export default CreateNewStoryForm;
