import React from 'react';

const ViewDisplay=(props)=>{
    return (
        <div className="views">
        <p className="count">{props.number} views</p>
        <h5>
          {props.name} instagram template #{props.word} #
          {props.word}
        </h5>
        <p className="last">View all {props.number} comments</p>
      </div>
    );
}

export default ViewDisplay;