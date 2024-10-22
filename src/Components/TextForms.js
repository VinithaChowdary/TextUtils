import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TextForms(props) {
    const handleUpClick = () =>{
        let NewText=text.toUpperCase();
        setText(NewText);
    }

    const handleDownClick = () =>{
        let NewText=text.toLowerCase();
        setText(NewText);
    }

    const clearText =()=>{
        setText('');
       
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const[text,setText]=useState("Enter the text");
  return (
    <>
    <div>
      <Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{props.heading}</Form.Label>
        <Form.Control as="textarea" rows={8} value={text} onChange={handleOnChange}/>
      </Form.Group>
    </Form>
    <Button variant="info" className="mx-3" onClick={handleUpClick}>Convert to Upper Case</Button>{' '}
    <Button variant="success" className="mx-3" onClick={handleDownClick}>Convert to Lower Case</Button>{' '}
    <Button variant="success" className="mx-3" onClick={clearText}>Clear Text</Button>{' '}
    <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
    
    </>
  );
}





