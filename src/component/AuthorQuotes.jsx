import React from "react";
import "../stylesheets/AuthorQuotes.css";

class AuthorQuotes extends React.Component {
//   componentDidMount() {
//     console.log(this.props.author);
//     this.props.getQuotes();
//   }

  render() {
    return (
      <div className="quotes-container">
        <h1>{this.props.author}</h1>
        {/* {this.props.author && this.props.getQuotes(this.props.author)} */}
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
