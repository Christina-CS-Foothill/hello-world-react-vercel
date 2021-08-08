import React from "react";
import EditStoryForm from "../components/stories/EditStoryForm";

export default function EditStoryPage() {


    function editStoryHandler(storyData){

        console.log(storyData);
    }

  return <section>
  
  <EditStoryForm onEditStory={editStoryHandler} />
</section>
}
