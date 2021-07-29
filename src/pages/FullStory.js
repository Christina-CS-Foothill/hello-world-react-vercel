import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/ui/Card";

function FullStoryPage(props) {
  const location = useLocation();
  //const { storyId } = location.state;
  //const { image } = location.state;
  const { title } = location.state;
  const { author } = location.state;
  const { summary } = location.state;
  const { content } = location.state;
  return (
    <Card>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <p>{content}</p>
    </Card>
  );
}

export default FullStoryPage;
