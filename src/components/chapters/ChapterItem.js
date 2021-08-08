import React from "react";
import Card from "../ui/Card";

function ChapterItem(props) {
  return (
    <Card>
      <div>
        <h2>{props.chapterNumber}</h2>
        <p>{props.chapterContent}</p>
      </div>
    </Card>
  );
}

export default ChapterItem;
