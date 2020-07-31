import React from "react";


const ImageDisplay = (props) => {
  return (
    <div className="tag_img">
      <img className="img_set" src={props.image} alt="ImageSet" />
    </div>
  );
};

export default ImageDisplay;
