import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results"

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
}

    function search() {
      // documentation: https://dictionaryapi.dev/
      let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiURL).then(handleResponse);
    }
    
    
function handleSubmit(event) {
    event.preventDefault();
    search();
}

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
}

    if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1> What word do you want to search?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultKeyword={props.defaultKeyword}
            />
            <div className="hint">
              <strong>suggested words: </strong> travel, yoga, wine, music,
              book...{" "}
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
    } else {
        load();
        return "Loading";
}
    
}