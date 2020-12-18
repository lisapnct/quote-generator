import React from "react";
import "../stylesheets/RandomQuote.css";
import { Link } from "react-router-dom";

const RandomQuote = (props) => {
  const { author, quote, genre } = props;
  return (
    <>
      <div className="center-container">
        <div className="yellow-rectangle"></div>
        <div className="random-quote">
          <p>{quote ? quote : "loading quote..."}</p>
        </div>
      </div>
      <Link to={`/author/${author}`}>
        <div className="author" onClick={() => props.authorQuotes(author)}>
          <div>
            <h3>{author}</h3>
            <p>{genre}</p>
          </div>
           <i className="material-icons">arrow_right_alt</i>
        </div>
      </Link>
    </>
  );
};

export default RandomQuote;
