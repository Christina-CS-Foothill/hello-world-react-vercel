import React from "react";
import classes from "./StoryItem.module.css";
import Backdrop from "../Backdrop";
import Modal from "../Modal";
import Card from "../ui/Card";
import { useState } from "react";


function StoryItem(props) {
    const [modalIsOpen, setModalIsOpen]  = useState(false);


    function readHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

  return (
    <Card>
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.summary}</p>
      </div>
      <div className={classes.actions} onClick={readHandler}>
        <button>READ</button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModalHandler} onViewFullStory={closeModalHandler}/> : null}
     {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
    </li>
    </Card>
  );
}

export default StoryItem;
