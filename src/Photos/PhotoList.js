import React from "react";
import PhotoAddForm from "./PhotoAddForm";
import PhotoItem from "./PhotoItem";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function PhotoList(props) {
  let { state, addCard } = props;

  const PhotoCardItems = state.map((item) => {
    return <PhotoItem {...item} />;
  });

  return (
    <div>
      <h1 className="text-center">Gallery</h1>

      <PhotoAddForm state={state} addCard={addCard} />
      <hr />

      <div className="container">
        <div className="gallery-list">{ PhotoCardItems }</div>
      </div>
    </div>
  );
}
