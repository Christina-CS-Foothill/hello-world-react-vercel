import React from 'react';

function Modal(props){

    function cancelHandler() {
        props.onCancel();
      }
    
      function viewFullStoryHandler() {
        props.onViewFullStory();
      }

   return (
   <div className='modal'>
        <p>This is where a story would be........</p>
        <button className="btn btn--alt" onClick={cancelHandler}> Cancel</button>
        <button className="btn" onClick={viewFullStoryHandler}>View Full Story</button>
    </div>
    );

}

export default Modal;