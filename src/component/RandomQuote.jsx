import React from "react";
import "../stylesheets/RandomQuote.css";

const RandomQuote = (props) => {
  return (
    <>
      <div className="center-container">
        <div className="yellow-rectangle"></div>
        <div className="random-quote">
          {props.quote ? props.quote : "loading quote..."}
        </div>
      </div>
      <div className="author" onClick={() => props.authorQuotes(props.author)}>
        <div>
          <h3>{props.author}</h3>
          <p>{props.genre}</p>
        </div>
         <i className="material-icons">arrow_right_alt</i>
      </div>
    </>
  );
};

export default RandomQuote;
