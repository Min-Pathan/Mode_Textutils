import React, { useState } from "react";
//import {saveAs} from "file-saver"
export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked "+text);

    let newtext = text.toUpperCase();
    //let newtext = "Factorial of "+text +" is "+ factorial(text);
    setText(newtext);
    props.showAlert("converted to upper case", "success");
  };

  const handleLoClick = () => {
    //console.log("Uppercase was clicked "+text);

    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lower case", "success")
  };

  const handleChange = (event) => {
    //console.log("on change");
    setText(event.target.value);    
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success")
  };

  const handleReverse = () => {
    let newtext = text.split(" ").reverse().join(" ");    
    setText(newtext);
    props.showAlert("reverse", "success")
  };


  const speak = () => {
    let newtext = new SpeechSynthesisUtterance();
    newtext.text=text;
    window.speechSynthesis.speak(newtext);
  };

  // const DarkClick = ()=> {
  //   document.querySelector('body').style.backgroundColor="black";
  //   document.querySelector('body').style.color="white";
  // }
  
  // const LightClick= ()=> {
  //   document.querySelector('body').style.backgroundColor="White";
  //   document.querySelector('body').style.color="black";
  // }


  //copy the text
  const handleCopy=()=> {
    // let newtxt = document.getElementById("myBox");
    // newtxt.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success")
  }
 //remove extra space
  const handleRemove = ()=>{
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "));
    props.showAlert("Extra space removed", "success")
  }

  // const DownloadFileClick = () => {
  //   saveAs("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //   "example.pdf")
  // }
 
  //*******************factorial method*********************
  // function factorial(n){
  // if (n === 0) return 1;
  //   let f = 1;
  //   while(n>0){
  //     f=f*n;
  //     n=n-1;
  //   }
  //   return f;
  // }
 //**************vowel********** 
 
  const [text, setText] = useState(''); //
  //console.log(useState('enter text herr2'));

  return (
    <>
      <div style={{color: props.mode==='dark'?'white':'black'}}  className="container">
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'white', 
          color: props.mode==='light'?'black':'black'}} 
          onChange={handleChange} id="myBox"rows="9"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-info mx-2  my-1" style={{color:props.greenClr}}onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>Lowercase</button>
        <button  disabled={text.length===0}className="btn btn-info mx2 my-1" onClick={handleClearClick}>Clear</button>
        <button  disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleReverse}>Reverse</button>
        {/* <button className="btn btn-dark mx-2" onClick={LightClick}>Light background</button>
        <button className="btn btn-dark mx-2" onClick={DarkClick}>Dark background</button> */}
        {/* <button className="btn btn-dark mx-3" onClick={DownloadFileClick}>Download</button> */}
        <button disabled={text.length===0} type="submit"className="btn btn-dark mx-2 my-1" onClick={speak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-dark my-3 my-1" onClick={handleRemove}>Removes extra spaces</button>
        
      </div>


       {/* count word n characters in the sentence of textbox */}
       <div style={{color: props.mode==='dark'?'white':'black'}}  className="container my-3">
        <h1>your text summary:</h1>
        {/* <p><b>{text.length>0?text.trim().split(" ").length:0}</b> words <b>{text.length}</b> characters</p> */}
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words <b>{text.length}</b> characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        
      </div> 
    </>
  );
}
