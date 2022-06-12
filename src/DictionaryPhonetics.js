import React from "react";
import "./DictionaryPhonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function DictionaryPhonetics(props) {
  if (props.phonetic.audio === "") {
    return null;
  } else {
    return (
      <div className="DictionaryPhonetics">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controlsList={"nodownload"}
          controls
          className="sound"
        />
        <div className="text">{props.phonetic.text}</div>
      </div>
    );
  }
}
