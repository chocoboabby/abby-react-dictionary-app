import React, { useState } from "react";
import DictionaryResult from "./DictionaryResult";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
          <h1 className="WordSearch">Search for a word</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <DictionaryResult results={result} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
