import React, {useState} from 'react'


export default function Textform(props) {
    const handleupClickc = ()=>{
        //console.log("upprcase was clickd" +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");

    }
    const handleloClickc = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success");
    }
    const handleclClickc = ()=>{
        let newText = ('');
        setText(newText)
        props.showAlert("cleared text!","success");

    }
    const handlecplClickc = ()=>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copide text!","success");

    }
    const handlextraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed!","success");

    }
    
    const handleonchange = (event) => {
        //console.log("on chang");
        setText(event.target.value);
    }
     const [text, setText] = useState('');   
  return (
    <>
    <div className="container" style={{color :props.mode==='dark'?'white':'black'}}>
      <h1 className='mb-4' >{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor :props.mode==='dark'?'#2a2222':'white'
       ,color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8" ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupClickc}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClickc}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclClickc}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecplClickc}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlextraspaces}>Remove extra spaces</button>
      
       
    </div>
    <div className="container my-2" style={{color :props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
  }
