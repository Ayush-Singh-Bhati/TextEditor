import React, { useState } from "react";

export default function Form(props) {
  
  const handleUPtext = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert("Changed into UpperCase!","success");
  };
  const handleLOtext = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert("Changed into LowerCase!","success");
  };
  const handleCleartext = () => {
    let newtext = ("");
    setText(newtext)
    props.showalert("Text Cleared!","success");
  };
  const handleCopytext = () => {
   var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy to Clipboard!","success");
  };
  // const handleItalictext = () => {
  //   let newtext = <i>text</i> ;
  //   setText(newtext)
  // };
  // const handleBoldtext = () => {
  //   let newtext = text  ;
  //   setText(newtext)
  // };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };


  const [text, setText] = useState (``);
  
  return (
    <>
      <div className="mb-3 my-4">
        <h1>Write Your Text here...</h1>
        <textarea className="form-control my-3 " value={text} style={{backgroundColor :props.mode=== 'light'?'white':'black' , color: props.mode=== 'light'?'black':'white' }} onChange={handleOnchange} id="mybox" rows="10" ></textarea>
      </div>
      <button type="button" className="btn btn-info my-4 mx-2" onClick={handleCopytext}>Copy Text</button>
      <button type="button" className="btn btn-warning my-4 mx-2" onClick={handleUPtext}>BIG TEXT</button>
      <button type="button" className="btn btn-warning my-4 mx-2" onClick={handleLOtext}>small text</button>
      <button type="button" className="btn btn-danger my-4 mx-2" onClick={handleCleartext}>Clear Text</button>
      {/* <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleBoldtext}>Bold Text</button>  */}
      {/* <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleItalictext}>Italic Text</button>  */}

      <div className="container my-2">
        <h2>Preview Text Summury</h2>
        <p>{text}</p>
        <p> <b>You write {text.split(" ").length-1} words and {text.length} letters </b> </p>
      </div>
    </>
  );
}
