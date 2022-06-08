import React from "react";
import DictionarySynonyms from "./DictionarySynonyms";

export default function DictionaryMeaning(props) {
  console.log(props.meanings);
  return (
    <div className="DictionaryMeaning">
      <h4>
        <em>{props.meanings.partOfSpeech}</em>
      </h4>

      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {"-"} {definition.definition}
          </div>
        );
      })}
      <div>
        <br />
        <DictionarySynonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}
