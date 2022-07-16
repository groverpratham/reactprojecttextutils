import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLowClick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleReverse = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.split("").reverse().join("");
        setText(newText);

    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value);

    }
 
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-success mx-3"  onClick={handleUpClick}>Convert to Upper Case</button>
   <button className="btn btn-primary mx-3"  onClick={handleLowClick}>Convert to Lower Case</button>
   <button className="btn btn-primary mx-3"  onClick={handleReverse}>Reverse </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008* text.split(" ").length} time taken to read these words </p>
    </div>
    </>
  )
}
