import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";
import DictionaryPhonetics from "./DictionaryPhonetics";

export default function DictionaryResult(props) {
  if (props.results) {
    return (
      <div className="DictionaryResult">
        <h2 className="text-capitalize">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <DictionaryPhonetics phonetic={phonetic} />
            </div>
          );
        })}
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
