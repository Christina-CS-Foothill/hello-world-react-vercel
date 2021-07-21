import React from "react";
import ChapterList from "../components/chapters/ChapterList";


const DUMMY_DATA = [
  {
    chapterTitle: "Chapter 1",
    body:
      "This is the first chapter of this very amazing story. Behold its greatness. I bet you can't wait to find out what happens next!",
  },
  {
    chapterTitle: "Chapter 2",
    body:
      "This is the second chapter of this very amazing story. Behold its greatness. I bet you can't wait to find out what happens next!",
  },
  {
    chapterTitle: "Chapter 3",
    body:
      "This is the third chapter of this very amazing story. Behold its greatness. I bet you can't wait to find out what happens next!",
  },
];

function FullStoryPage(props) {
  return (
   <ChapterList chapters={DUMMY_DATA}/>
  );
}

export default FullStoryPage;
