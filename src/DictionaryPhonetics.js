import React from "react";

export default function DictionaryPhonetics(props) {
  return (
    <div className="DictionaryPhonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
