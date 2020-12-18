import React from "react";
import "../stylesheets/AuthorQuotes.css";

class AuthorQuotes extends React.Component {
  componentDidMount() {
    this.props.getQuotes(this.props.author);
  }

  render() {
    return (
      <div className="quotes-container">
        <h1>{this.props.author}</h1>
        {this.props.quotes.map((quote) => {
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
  }
}

export default AuthorQuotes;
