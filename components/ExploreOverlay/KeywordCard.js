import React from "react";
import "./KeywordCard.css";

export default function KeywordCard(props) {
  return (
    <div className="keyword-card" style={props.style}>
      <label>{props.data}</label>{" "}
      <label onClick={() => props.delFn(props.id)}>x</label>
    </div>
  );
}
