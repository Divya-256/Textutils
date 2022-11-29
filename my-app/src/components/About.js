import React,{useState} from 'react'

export default function About() {
  const[btntext,setMyText]=useState("Enable Dark Mode")
  const [myStyle,setMyStyle]=useState({
    color: 'black',
    backgroundColor : 'white'
})
 
  const toggleStyle =()=>{
    if(myStyle.color==='black'){
      setMyStyle({
        color: 'white',
        backgroundColor : 'black'
      })
      setMyText("Enable Light mode")
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor : 'white'
      })
      setMyText("Enable Dark mode")
    }
  }
  return (
    <div style={myStyle}>
      <div className="accordion" id="accordionExample" style={myStyle} >
        <h1>About Us</h1>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             LOWER TO UPPER
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Conversion from lowercase to uppercase. </strong>Using the provided button we can convert the entire text that is given in textarea to uppercase.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             UPPER TO LOWER
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>Conversion from uppercase to lowercase. </strong>Using the provided button we can convert the entire text that is given in textarea to lowercase.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            COPYING TO CLIPBOARD
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Given text can be copied to the clipboard.</strong> We can also copy the converted text into clipboard,we can even find the character and word counts and the time taken to read the given texts.
            </div>
          </div>
        </div>
</div>
    <div className="container">
      <button className='btn btn-primary my-4' type="button" onClick={toggleStyle}>{btntext}</button>
    </div>
    </div>
  )
}
