import React from "react";
import "./DictionaryPhonetics.css";

export default function DictionaryPhonetics(props) {
  if (props.phonetic.audio === "") {
    return null;
  } else {
    return (
      <div className="DictionaryPhonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  }
}
