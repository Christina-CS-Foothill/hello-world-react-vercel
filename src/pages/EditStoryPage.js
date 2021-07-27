import React from "react";
import EditStoryForm from "../components/stories/EditStoryForm";

export default function EditStoryPage() {


    function editStoryHandler(storyData){

        console.log(storyData);
    }

  return <section>
  <h1>Create New Story</h1>
  <EditStoryForm onEditStory={editStoryHandler} />
</section>
}
