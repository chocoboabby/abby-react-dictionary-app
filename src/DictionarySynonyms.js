import React from "react";

export default function DictionarySynonyms(props) {
  if (props.synonyms) {
    return (
      <div className="DictionarySynonyms">
        <div className="container">
          <ul>
            {props.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
