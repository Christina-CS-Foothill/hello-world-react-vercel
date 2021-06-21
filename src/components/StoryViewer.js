import React from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from "react";

function StoryViewer(props){
    const [modalIsOpen, setModalIsOpen]  = useState(false);

    function readHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
    <div className="card">
        <div className="actions">
            <h2>{props.title}</h2>
            <button className='btn' onClick={readHandler}>Read</button>
        </div>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} onViewFullStory={closeModalHandler}/> : null}
        {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
        
    </div>
    
    );
}

export default StoryViewer;