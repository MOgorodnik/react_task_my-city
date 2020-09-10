import React from "react";

export default function PhotoItem(props) {
  // console.log(props);
  return (
    <div className="gallery-item">
      <div className="img-holder">
        <img src={props.imgURI} alt={props.imgAlt} />
      </div>
      <div className="desc">"{props.imgDescr}"</div>
    </div>
  );
}
