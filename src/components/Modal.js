import React from "react";
import { Link } from "react-router-dom";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function viewFullStoryHandler() {
    props.onViewFullStory();
  }

  return (
    <div className="modal">
      <p>{props.text}</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        {" "}
        Cancel
      </button>
      <Link to="/full-story" chapterOneTitle={props.chapterOneTitle} chapterOneBody={props.chapterOneBody}>
        <button className="btn" onClick={viewFullStoryHandler}>
          View Full Story
        </button>
      </Link>
    </div>
  );
}

export default Modal;
