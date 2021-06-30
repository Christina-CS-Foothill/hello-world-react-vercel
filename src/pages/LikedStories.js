import React, { useContext } from 'react';
import LikedStoriesContext from '../store/liked-stories-context';
import StoryList from '../components/stories/StoryList';

function LikedStoriesPage() {

  const likedStoriesCtx = useContext(LikedStoriesContext);

  let content;

  if(likedStoriesCtx.totalLikedStories === 0){
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
  