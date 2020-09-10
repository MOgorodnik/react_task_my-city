import React from "react";
import PhotoAddForm from "./PhotoAddForm";
import PhotoItem from "./PhotoItem";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function PhotoList(props) {
  let { initialFormData } = props;

  const PhotoCardItems = props.state.map((item) => {
    return <PhotoItem {...item} />;
  });

  return (
    <div>
      <h1 className="text-center">Gallery</h1>

      <PhotoAddForm state={props.state} addCard={props.addCard} initialFormData={initialFormData} />

      <hr />

      <div className="container">
        <div className="gallery-list">{ PhotoCardItems }</div>
      </div>
    </div>
  );
}
