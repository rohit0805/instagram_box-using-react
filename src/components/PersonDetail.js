import React from "react";


const PersonDetail = (props) => {
  return (
    <div className="heading">
      <div>
        <img className="head_img" src={props.avatar} alt="avatar" />
        <div className="head_text">
          <h5>{props.name}</h5>
          <p>{props.jobtype}</p>
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default PersonDetail;
