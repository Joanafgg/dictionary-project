import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
}

  function handleDictionaryResponse(response) {
    setPhotos(response.data.photos);  
}
  
    function search() {
      // documentation: https://dictionaryapi.dev/
      let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiURL).then(handleResponse);

      let pexelsApiKey = "ac32e0ate3o6d71438fbfb04d2cec6d9";
      let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;
            axios.get(pexelsApiUrl).then(handleDictionaryResponse);

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
              defaultKeyword={props.defaulteyword}
            />
            <div className="hint">
              <strong>suggested words: </strong> travel, yoga, wine, music,
              sunrise...{" "}
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
    } else {
        load();
        return "Loading";
}
    
}