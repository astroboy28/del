import React from "react";
// SCSS
import "./partnerBox.scss";


function partnerBox(props) {
  return (
    <div className="partner__box flex-center">
      <img src={props.partner} alt="partner" />
    </div>
  );
}

export default partnerBox;