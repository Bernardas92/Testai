import React, { useState, useEffect } from "react";

import Joke from "../components/joke/Joke";

import "./App.css";

function App() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
    )
      .then((res) => res.json())
      .then((res) => {
        setJoke(res.jokes);
      });
  }, []);

  return (
    <>
      <h2>Jokes list</h2>
      {joke.length && (
        <div className="row">
          {joke.map((j) => (
            <Joke key={j.id} setup={j.setup} delivery={j.delivery} />
          ))}
        </div>
      )}
    </>
  );
}
export default App;