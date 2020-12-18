import "./stylesheets/App.css";
import RandomQuote from "./component/RandomQuote";
import Navbar from "./component/Navbar";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import AuthorQuotes from "./component/AuthorQuotes";

const App = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const [authorQuotes, setAuthorQuotes] = useState([]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((apiRes) => {
        setRandomQuote(apiRes.data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  const getAuthorQuotes = (name) => {
    axios
      .get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`)
      .then((apiRes) => {
        setAuthorQuotes(apiRes.data.data);
      })
      .catch((err) => console.log(err));
  };

  const random = randomQuote;
  return (
    <>
      <Navbar randomize={getRandomQuote} />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <RandomQuote
              quote={random.quoteText}
              author={random.quoteAuthor}
              genre={random.quoteGenre}
              authorQuotes={getAuthorQuotes}
            />
          </div>
        </Route>
        <Route path="/author/:name">
          <AuthorQuotes
            getQuotes={getAuthorQuotes}
            author={random.quoteAuthor}
            quotes={authorQuotes}
          />
        </Route>
      </Switch>
      <footer>Lisa Poncet @ Devchallenges.io</footer>
    </>
  );
};

export default App;
