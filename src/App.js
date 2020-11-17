import "./stylesheets/App.css";
import RandomQuote from "./component/RandomQuote";
import Navbar from "./component/Navbar";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    randomQuote: "",
    authorQuotes: [],
  };

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((apiRes) => {
        this.setState({
          randomQuote: apiRes.data.quote,
        });
      })
      .catch((err) => console.log(err));
  }

  getAuthorQuotes = (name) => {
    console.log("get author quotes:", name);
    axios
      .get(
        `https://quote-garden.herokuapp.com/api/v2/authors/${name}?page=1&limit=10`
      )
      .then((apiRes) => {
        this.setState({
          authorQuotes: apiRes.data.quotes,
        });
        console.log(this.state.authorQuotes)
      })
      .catch((err) => console.log(err));
  }

  render() {
    const random = this.state.randomQuote;
    return (
      <>
        <Navbar randomize={this.getRandomQuote} />
        <div className="App">
          <RandomQuote
            quote={random.quoteText}
            author={random.quoteAuthor}
            genre={random.quoteGenre}
            authorQuotes={this.getAuthorQuotes}
          />
        </div>
        <footer>Created by Lisa Poncet</footer>
      </>
    );
  }
}

export default App;
