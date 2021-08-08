import React from "react";
import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";
import firebase from "firebase";

const LikedStoriesContext = createContext({
  likedStories: [], //where you fetch
  totalLikedStories: 0,
  addLikedStory: (likedStory, currentUserId) => {},
  removeLikedStory: (storyId) => {},
  storyIsLiked: (storyId) => {},
});

export function LikedStoriesContextProvider(props) {
  const [userLikedStories, setUserLikedStories] = useState([]);

  function addLikedStoryHandler(likedStory, currentUserId) {
    //create a likeStory object and then add it to the database
    const storyLikeObject = {
      userId: currentUserId,
      storyId: likedStory.storyId,
    };

    fetch(
      "https://share-our-stories-project-default-rtdb.firebaseio.com/storyLikes.json",
      {
        method: "POST",
        body: JSON.stringify(storyLikeObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setUserLikedStories((prevUserLikedStories) => {
      //console.log(likedStory);
      //where you'd post the object
      return prevUserLikedStories.concat(likedStory);
    });
  }

  function removeLikedStoryHandler(storyId) {
    //delete the object
    setUserLikedStories((prevUserLikedStories) => {
      return prevUserLikedStories.filter((story) => story.storyId !== storyId);
    });

    //find the object and then delete it
    fetch(
      "https://share-our-stories-project-default-rtdb.firebaseio.com/storyLikes.json"
    ).then((response) => {
      return response.json();
    }).then((data) => {
      for (const key in data) {
        const storyLikeObject = {
          id: key,
          ...data[key], //called the 'spread' operator, default JavaScript operator
          //allows you to create key-data pairs and transforms the data into an array/a meetup object
        };

        if (storyLikeObject.storyId === storyId) {
            console.log(storyLikeObject.id);
            //do the deleting
            var update = {};
            update['/storyLikes/' + storyLikeObject.id] = null;
            return firebase.database().ref().update(update);
        } 
      }
    })
  }

  function storyIsLikedHandler(storyId) {
    const {currentUser} = useAuth();
    //console.log(storyId)
    
    //checks if the story is liked, filters through
    //fetch list of story objects, look for this specific one
    fetch(
      "https://share-our-stories-project-default-rtdb.firebaseio.com/storyLikes.json"
    ).then((response) => {
      return response.json();
    }).then((data) => {
      for (const key in data) {
        const storyLikeObject = {
          id: key,
          ...data[key], //called the 'spread' operator, default JavaScript operator
          //allows you to create key-data pairs and transforms the data into an array/a meetup object
        };

        //check the user id
        if (storyLikeObject.userId === currentUser.uid) {
            //console.log(storyLikeObject.id);
            //console.log(storyId);
            //check the story id
            if(storyLikeObject.storyId === storyId){
              //console.log(storyLikeObject.userId);
              
            }
        } else {
          continue;
        }
      }
    })

    return userLikedStories.some((story) => story.storyId === storyId);

  }

  const context = {
    likedStories: userLikedStories,
    totalLikedStories: userLikedStories.length,
    addLikedStory: addLikedStoryHandler,
    removeLikedStory: removeLikedStoryHandler,
    storyIsLiked: storyIsLikedHandler,
  };

  return (
    <LikedStoriesContext.Provider value={context}>
      {props.children}
    </LikedStoriesContext.Provider>
  );
}

export default LikedStoriesContext;
