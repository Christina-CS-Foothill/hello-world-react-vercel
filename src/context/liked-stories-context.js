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
      //console.log(likedStory);
      return prevUserLikedStories.concat(likedStory);
    });
  }

  function removeLikedStoryHandler(storyId) {
    setUserLikedStories((prevUserLikedStories) => {
      return prevUserLikedStories.filter((story) => story.storyId !== storyId);
    });
  }

  function storyIsLikedHandler(storyId) {
    //console.log(storyId)
    return userLikedStories.some((story) => story.storyId === storyId);
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
