import React from "react";
import DictionarySynonyms from "./DictionarySynonyms";

export default function DictionaryMeaning(props) {
  console.log(props.meanings);
  return (
    <div className="DictionaryMeaning">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong> {definition.definition}
            <br />
            <DictionarySynonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
