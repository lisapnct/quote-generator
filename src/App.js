import "./stylesheets/App.css";
import RandomQuote from "./component/RandomQuote";
import Navbar from "./component/Navbar";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import AuthorQuotes from "./component/AuthorQuotes";

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
  };

  getAuthorQuotes = (name) => {
    axios
      .get(
        `https://quote-garden.herokuapp.com/api/v2/authors/${name}?page=1&limit=10`
      )
      .then((apiRes) => {
        this.setState({
          authorQuotes: apiRes.data.quotes,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const random = this.state.randomQuote;
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Navbar randomize={this.getRandomQuote} />
            <div className="App">
              <RandomQuote
                quote={random.quoteText}
                author={random.quoteAuthor}
                genre={random.quoteGenre}
                authorQuotes={this.getAuthorQuotes}
              />
            </div>
          </Route>
          <Route path="/author/:name">
            <AuthorQuotes author={random.quoteAuthor} quotes={this.state.authorQuotes}/>
          </Route>
        </Switch>
        <footer>Lisa Poncet @ Devchallenges.io</footer>
      </>
    );
  }
}

export default App;
