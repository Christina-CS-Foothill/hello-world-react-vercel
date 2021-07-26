import React from "react";
import StoryList from "../components/stories/StoryList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AllStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStories, setLoadedStories] = useState([]);
  const { currentUser } = useAuth();


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

          stories.push(story);
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
      {!currentUser ? (
        <Link to="/authentication/login">Log In?</Link>
      ) : (
        <Link to="/authentication/dashboard">View Profile?</Link>
      )}
      <h1>All Stories</h1>
      <StoryList stories={loadedStories} />
    </section>
  );
}

export default AllStoriesPage;
