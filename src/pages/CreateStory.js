import CreateNewStoryForm from "../components/stories/CreateNewStoryForm";
import { useHistory } from "react-router-dom";
import React from "react";

function CreateStoryPage() {
  const history = useHistory();

  function createNewStoryHandler(
    storyData,
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
    )
      .then((response) => response.json())
      .then((data) => {
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
