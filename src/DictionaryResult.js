import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";
import DictionaryPhonetics from "./DictionaryPhonetics";

export default function DictionaryResult(props) {
  if (props.results) {
    return (
      <div className="DictionaryResult">
        <section>
          <h1 className="text-capitalize">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <DictionaryPhonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
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
