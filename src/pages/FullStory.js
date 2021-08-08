import React from "react";
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

  var chapCount = 1;
  var chapters = [];
  var story = firebase.database().ref("/stories/" + storyId);

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
  });

  console.log(chapters);

  return (
    <section>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <ChapterList chapters={chapters} />
    </section>
  );
}

export default FullStoryPage;
