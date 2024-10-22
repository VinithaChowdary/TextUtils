import React, {useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";


export default function About1() {
  const[myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'})
    const[btnText,setBtnText]=useState("Enable dark mode")
    const toggleMode = () =>{
        if(myStyle.color==='black'){
          setMyStyle({
            color: 'white',
            backgroundColor: 'black'
          })
          setBtnText("Enable Light Mode")
        }

       


        else{
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          })
          setBtnText("Enable dark Mode")
        }
    }
  
  return (
    <>
      <div className="about-container" style={myStyle}>
        <h1> About Us</h1>
        <Accordion>
          <Accordion.Item eventKey="0" style={myStyle}>
            <div className="a-header"><Accordion.Header>Accordion Item #1</Accordion.Header></div>
            
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={myStyle}>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button variant="primary my-3" onClick={toggleMode}>{btnText}</Button>{" "}
  
        
      </div>
    </>
  );
}
