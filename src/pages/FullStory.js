import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import firebase from "firebase";
import ChapterList from "../components/chapters/ChapterList";

function FullStoryPage(props) {
  const location = useLocation();
  const { storyId } = location.state;
  //const { image } = location.state;
  const { title } = location.state;
  const { author } = location.state;
  //const { summary } = location.state;
  //const { content } = location.state;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedChapters, setLoadedChapters] = useState([]);

  var chapCount = 1;
  var chapters = [];
  var story = firebase.database().ref("/stories/" + storyId);

  useEffect(() => {
    setIsLoading(true);
    story.on("value", (snapshot) => {
      console.log(snapshot.val());
      let snap = snapshot.val();
      for (const str in snap) {
        if (str.includes("chapter")) {
          const chapter = {
            chapterNumber: chapCount,
            chapterContent: snap[str],
          };
          chapters.push(chapter);
          chapCount++;
        }
      }
      setIsLoading(false);
      setLoadedChapters(chapters);
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
      <h1>{title}</h1>
      <h3>{author}</h3>
      <ChapterList chapters={loadedChapters} />
    </section>
  );
}

export default FullStoryPage;
