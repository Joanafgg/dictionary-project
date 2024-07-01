import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
}

    function search(event) {
      event.preventDefault();

      // documentation: https://dictionaryapi.dev/
      let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
                <input type="submit" value="Search" className="btn btn-primary"/> 
</form>

        </div>
    )
        ;
}