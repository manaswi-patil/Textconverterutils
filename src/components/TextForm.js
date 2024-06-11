import React, {useState}from 'react'
export default function TextForm(Props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked "+ text);
        let newText= text.toUpperCase();
        setText(newText)
        }
    const handleLoClick=()=>{
        // console.log("lowercase was clicked "+ text);
        let newText= text.toLowerCase();
        setText(newText)
      }
      const handleClearClick=()=>{
        let newText= '';
        setText(newText)
      }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
      }
      const handleCopy=()=>{
      // console.log("im a copy");
      var text = document.getElementById("myBox");
      text.Select();
      text.setSelectionRange('0,9999');
      navigator.Clipboard.writeText(text.value);
      }
      const handleExtraSpaces =()=>{
        let newText = text.split(/[]+/);
        setText(newText.join(""))
      }
    const [text, setText]=useState('');
  return (
    <>
    <div ClassName='container'>
   <h1>{Props.heading}</h1>
<div class="mb-3">
  <label for="MyBox" class="form-label">Example textarea</label>
  <textarea class="form-control" value={text} onChange={handleOnChange} style={{}} id="MyBox" rows="8"></textarea>
</div>
<button Class= "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button Class= "btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
{/* <button Class= "btn btn-primary mx-2" onClick={handleReverse}>Reverse Text</button> */}
<button Class= "btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button Class= "btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button Class= "btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="contaner">
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).length}words and {text.length}characters</p>
          <p>{0.008*text.split(" ").length }Minutes read</p>
          <h2>Preview</h2>
          <p>{'Enter something in the title box to preview here'}</p>
    </div>
    </> )}
