import React from "react";
import StoryList from "../components/stories/StoryList";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function AllAuthorStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStories, setLoadedStories] = useState([]);
  const location = useLocation();
  const { userId } = location.state;
  const { author } = location.state;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://share-our-stories-project-default-rtdb.firebaseio.com/stories.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const stories = [];

        for (const key in data) {
          const story = {
            id: key,
            ...data[key], //called the 'spread' operator, default JavaScript operator
            //allows you to create key-data pairs and transforms the data into an array/a meetup object
          };

          if (story.userId !== userId) {
              console.log(userId);
            continue;
          } else {
            stories.push(story);
          }
        }
        setIsLoading(false);
        setLoadedStories(stories);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Stories Created By: {author}</h1> 
      <StoryList stories={loadedStories} />
    </section>
  );
}

export default AllAuthorStoriesPage;
