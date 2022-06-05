import React from "react";

export default function DictionarySynonyms(props) {
  if (props.synonyms) {
    return (
      <div className="DictionarySynonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
