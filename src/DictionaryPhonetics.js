import React from "react";

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
        {props.phonetic.text}
      </div>
    );
  }
}
