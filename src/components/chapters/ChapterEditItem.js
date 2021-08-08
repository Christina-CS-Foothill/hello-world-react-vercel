import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

function ChapterEditItem(props) {
  console.log(props.storyId);
  return (
    <Card>
      <Link
        to={{
          pathname: "/edit-chapter",
          state: {
            storyId: props.storyId,
            chapterName: props.chapterName,
            chapterContent: props.chapterContent,
          },
        }}
      >
        <strong>Chapter</strong> {props.chapterName}
      </Link>
    </Card>
  );
}

export default ChapterEditItem;
