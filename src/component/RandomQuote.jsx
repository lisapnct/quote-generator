import React from "react";
import "../stylesheets/RandomQuote.css";

const RandomQuote = () => {
  return (
    <>
      <div className="center-container">
        <div className="yellow-rectangle"></div>
        <div className="random-quote">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam a
          dolore et pariatur dicta fugit incidunt magnam repellendus fuga veniam
          dolorum sit ab, repellat corrupti quasi! Dignissimos illo minus cum!
        </div>
      </div>
      <div className="author">
        <h3>Author</h3>
        <p>category</p>
      </div>
    </>
  );
};

export default RandomQuote;
