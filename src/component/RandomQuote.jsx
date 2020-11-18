import React from "react";
import "../stylesheets/RandomQuote.css";
import { Link } from "react-router-dom";

const RandomQuote = (props) => {
  return (
    <>
      <div className="center-container">
        <div className="yellow-rectangle"></div>
        <div className="random-quote">
          <p>{props.quote ? props.quote : "loading quote..."}</p>
        </div>
      </div>
      <Link to={`/author/${props.author}`}>
        <div
          className="author"
          onClick={() => props.authorQuotes(props.author)}
        >
          <div>
            <h3>{props.author}</h3>
            <p>{props.genre}</p>
          </div>
           <i className="material-icons">arrow_right_alt</i>
        </div>
      </Link>
    </>
  );
};

export default RandomQuote;
