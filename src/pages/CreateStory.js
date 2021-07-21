import CreateNewStoryForm from "../components/stories/CreateNewStoryForm";
import { useHistory } from "react-router-dom";
import React from "react";

function CreateStoryPage() {
  const history = useHistory();

  /*function createFirstChapter(chapterTitle, chapterBody, storyData) {
    const chapter1 = { title: chapterTitle, body: chapterBody ,};
    fetch(
      "https://share-our-stories-project-default-rtdb.firebaseio.com/chapters.json",
      {
        method: "POST",
        body: JSON.stringify(chapter1),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }*/

  function createNewStoryHandler(
    storyData,
    enteredChapterTitle,
    enteredChapter
  ) {
    fetch(
      "https://share-our-stories-project-default-rtdb.firebaseio.com/stories.json",
      {
        method: "POST",
        body: JSON.stringify(storyData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //createFirstChapter(enteredChapterTitle, enteredChapter, storyData);
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Create New Story</h1>
      <CreateNewStoryForm onCreateNewStory={createNewStoryHandler} />
    </section>
  );
}

export default CreateStoryPage;
