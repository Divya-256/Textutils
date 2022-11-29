import React,{useState} from 'react'


export default function Textforms(props) {
    const [text, setText] = useState("");
    
    const handleUpClick = ()=>{
        console.log("button is clicked and changed text is " + text);
        let newtest=text.toUpperCase();
        setText(newtest);
        props.showAlert("Conevrted to Uppercase","success");
    }
    const handleUpClick2 = ()=>{
        console.log("button is clicked and changed text is " + text);
        let newtest=text.toLowerCase();
        setText(newtest);
        props.showAlert("Conevrted to Lowercase","success");
    }
    const handleOnChange= (event)=>{
        console.log("handle changed");
        setText(event.target.value);

    }
    const handleUpClick3=()=>{
       setText("");
       props.showAlert("Text cleared","success");
    }
    const textCopy=()=>{
      var text=document.getElementById("myform");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success");
    }
 
  return (
 <>
 <div className="container" >
  <div className="mb-3">
   <h2> <label for="myform"  className="form-label my-3"  style={{color:props.mode==='dark'?'white':'black'}} >{props.heading}</label></h2>
    <textarea className="form-control" id="myform" rows="10" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}}  value={text} onChange={handleOnChange}></textarea>
    <button className=" btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert it into uppercase</button>
    <button className=" btn btn-primary my-2 mx-1" onClick={handleUpClick2}>Convert it into lowercase</button>
    <button className=" btn btn-primary my-2 mx-1" onClick={handleUpClick3}>Clear</button>
    <button className=" btn btn-primary my-2 mx-1" onClick={textCopy}>Copy Text</button>
  </div>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>Your Summary</h3>
    <p>It contains {text.length} characters and {text.split(" ").length} words <br/>
    {0.008 * text.split(" ").length} minutes read
    </p>
   
    <h4>Preview</h4>
    <p>{text.length>0?text:'enter something in text area to preview here!!'}</p>
  </div>
  </> 
  )
}
