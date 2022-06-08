import React from "react";
import "./DictionarySynonyms.css";

export default function DictionarySynonyms(props) {
  if (props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="DictionarySynonyms">
        <div className="container">
          <strong>Synonyms:</strong>
          <ul>
            {props.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
