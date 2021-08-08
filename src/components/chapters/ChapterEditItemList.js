import React from "react";
import ChapterEditItem from "./ChapterEditItem";

function ChapterEditItemList(props) {
  return (
    <ul>
      {props.chapters.map((chapter) => (
        <ChapterEditItem
          key={chapter.chapterName}
          storyId={chapter.storyId}
          chapterName={chapter.chapterName}
          chapterContent={chapter.chapterContent}
        />
      ))}
    </ul>
  );
}

export default ChapterEditItemList;
