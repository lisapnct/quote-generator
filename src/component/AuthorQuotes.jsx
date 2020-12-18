import React, { useEffect } from "react";
import "../stylesheets/AuthorQuotes.css";

const AuthorQuotes = (props) => {
  useEffect(() => {
    props.getQuotes(props.author);
  });

  const { author, quotes } = props;
  return (
    <div className="quotes-container">
      <h1>{author}</h1>
      {quotes.map((quote) => {
        return (
          <div key={quote._id} className="quote-container">
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
