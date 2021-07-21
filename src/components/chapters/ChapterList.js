import React from "react";
import ChapterItem from "./ChapterItem";

function ChapterList(props) {
  return (
    <ul>
      {props.chapters.map((chapter) => (
        <ChapterItem
          chapterTitle={chapter.chapterTitle}
          body={chapter.body}
          storyId={chapter.storyId}
          chapterId={chapter.chapterId}
        />
      ))}
    </ul>
  );
}

export default ChapterList;
