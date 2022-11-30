import React, { useState } from "react";

export default function TextForm(props) {
  // Clear Button
  const handleClearText = () => {
    setText("");
    props.showAlert("Cleared", "success");
  };
  // CameleButton
  const handleCamel = () => {
    let newText = text;

    let arr = newText.split(/[ ]+/);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    setText(arr.join(" "));
  };

  // Copy Button
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };
  // Extra Space Remover Button
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  // uppercase Button
  const handleUpClick = () => {
    // console.log("uppercaaase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };
  // LowerCase Button
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#162034",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearText}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Space Remover
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCamel}
        >
          Capitalize First Letter of Every Word
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words,
          {text.length} characters,
          {
            text.split(".").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Sentence
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}
          (Min) Reading Time{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Empty Right Now"}</p>
      </div>
      
     { console.log(text)}
    </>
  );
}
// export const doc={text};