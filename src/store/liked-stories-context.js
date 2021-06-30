import React from "react";
import { createContext, useState } from "react";

const LikedStoriesContext = createContext({
  likedStories: [],
  totalLikedStories: 0,
  addLikedStory: (likedStory) => {},
  removeLikedStory: (storyId) => {},
  storyIsLiked: (storyId) => {}
});

export function LikedStoriesContextProvider(props) {
  const [userLikedStories, setUserLikedStories] = useState([]);

  function addLikedStoryHandler(likedStory) {
    setUserLikedStories((prevUserLikedStories) => {
      return prevUserLikedStories.concat(likedStory);
    });
  }

  function removeLikedStoryHandler(storyId) {
    setUserLikedStories((prevUserLikedStories) => {
      return prevUserLikedStories.filter((story) => story.id !== storyId);
    });
  }

  function storyIsLikedHandler(storyId) {
    return userLikedStories.some((story) => story.id === storyId);
  }

  const context = {
    likedStories: userLikedStories,
    totalLikedStories: userLikedStories.length,
    addLikedStory: addLikedStoryHandler,
    removeLikedStory: removeLikedStoryHandler,
    storyIsLiked: storyIsLikedHandler
  };

  return (
    <LikedStoriesContext.Provider value={context}>
      {props.children}
    </LikedStoriesContext.Provider>
  );
}

export default LikedStoriesContext;
