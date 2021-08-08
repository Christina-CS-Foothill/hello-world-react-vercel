import React from "react";
import ChapterItem from "./ChapterItem";

function ChapterList(props) {
  return (
    <ul>
      {props.chapters.map((chapter) => (
        console.log(chapter.chapterContent),
        <ChapterItem
          key={chapter.chapterNumber}
          chapterNumber={chapter.chapterNumber}
          chapterContent={chapter.chapterContent}
        />
      ))}
    </ul>
  );
}

export default ChapterList;
