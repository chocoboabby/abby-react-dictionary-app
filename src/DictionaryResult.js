import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";

export default function DictionaryResult(props) {
  if (props.results) {
    return (
      <div className="DictionaryResult">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <DictionaryMeaning meanings={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
