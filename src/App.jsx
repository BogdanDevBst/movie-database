import React, { useState, useEffect } from "react";
import "./App.module.scss";

import Search from "./components/Search";

const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=986782ba";

  let fetchedMovie;

  useEffect = (event) => {
    if (event.key === "Enter") {
      fetch(apiurl + "&=" + state.s)
        .then((result) => result.json())
        .then((result) => (fetchedMovie = result));
      setState();
      console.log(result);
    }
  };

  const handleInput = (event) => {
    let s = event.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <>
      <div>
        <header>
          <h1>Movie database</h1>
        </header>
        <main>
          <Search handleInput={handleInput} />
        </main>
      </div>
    </>
  );
};

export default App;
