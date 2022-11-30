import React from "react";
// no need to import usestate because it wa needed by dark mode button only
export default function About(props) {
  let myStyle={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'#081c45':'white'
  }
     
    //it was a dark mode button only for about page
    //  const[myStyle,setMyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
            
    //     }
    // )
    // const[btnText,setbtnText]=useState("Enable Dark Mode")

    // let toggleStyle = ()=>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    // }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button "style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>The users have the freedom to run, copy, distribute, study, change and improve the software</strong> .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              User Friendly Interface
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Interface  is aimed at maximum user convenience. The main goal of a user-friendly interface is to provide a perfect user experience.</strong> .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              DEVELOPER DETAILS
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>NAME: OBAID ASHIQ <br/>
                      mail: obaiduzair822@gmail.com <br/>
                      GitHub: ubisage</strong> 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary ">{btnText}</button>
      </div> */}
    </div>
  );
}
