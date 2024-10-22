import "./App.css";
import Navbari from "./Components/Navbari";
import TextForms from "./Components/TextForms";
import About1 from "./Components/About1";
import Alerts1 from "./Components/Alerts1";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react'

function App() {
  const [mode,setMode]= useState('dark');

  return (
    <>
      <div>
        <div className="alerts">
          <Alerts1/>
        </div>
        <div className="form">
          <Navbari title="TextUtils" about="About us" mode="dark"/>
        </div>

        <div className="about">
          <About1 />
        </div>

        <div className="container my-3">
          <TextForms heading="Enter the text to analyze" />
        </div>
      </div>
    </>
  );
}

export default App;
