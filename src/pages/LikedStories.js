import React, { useContext, useEffect, useState } from 'react';
import LikedStoriesContext from '../context/liked-stories-context';
import StoryList from '../components/stories/StoryList';
import { useAuth } from '../context/AuthContext';

function LikedStoriesPage() {

  const likedStoriesCtx = useContext(LikedStoriesContext);

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

          if (story.userId) {
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
  let content;

  if(LikedStoriesContext.totalLikedStories === 0){
    content = <p>You haven't liked any stories yet. Start adding some?</p>
  } else {
    content =  <StoryList stories={likedStoriesCtx.likedStories}/>
  }

    return <section>
      <h1>My Liked Stories</h1>
      {content}
    </section>;
  }
  
  export default LikedStoriesPage;
  