import React from "react";
import "../stylesheets/AuthorQuotes.css";

const AuthorQuotes = (props) => {
  return (
    <div className="quotes-container">
      <h1>{props.author}</h1>
      {props.quotes.map((quote) => {
        return (
          <div className="quote-container">
            <div className="yellow-rectangle"></div>
            <div className="one-quote">
              <p>{quote.quoteText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AuthorQuotes;
