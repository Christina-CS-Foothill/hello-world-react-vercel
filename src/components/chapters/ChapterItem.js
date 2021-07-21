import React from "react";
import Card from "../ui/Card";

function ChapterItem(props) {
  return (
    <Card>
      <div>
        <h2>{props.chapterTitle}</h2>
        <p>{props.body}</p>
      </div>
    </Card>
  );
}

export default ChapterItem;
