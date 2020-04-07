import React, { useState } from "react";
import "./App.module.scss";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";

const App = () => {
  const [state, setState] = useState({
    results: [],
  });

  const apiurl = "http://www.omdbapi.com/?apikey=986782ba";

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results };
        });
      });
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
          <Search handleInput={handleInput} search={search} />
          <Results results={state.results} />
        </main>
      </div>
    </>
  );
};

export default App;
