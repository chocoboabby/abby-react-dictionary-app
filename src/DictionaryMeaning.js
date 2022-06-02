import React from "react";

export default function DictionaryMeaning(props) {
  return (
    <div className="DictionaryMeaning">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition} </p>
          </div>
        );
      })}
    </div>
  );
}
